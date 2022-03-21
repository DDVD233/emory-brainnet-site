# Structural Brain Network Construction
The Structural Brain Network Construction pipeline is a standardized pipeline for general researchers to build their own structural brain network from diffusion tensor imaging (DTI) MRI data. 
## Preparation:
### System requirement:
- Linux or MacOS (Intel Core)
### Requirements
- [FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FSL)
- [Diffusion Toolkit](http://trackvis.org/) (TrackVis)
- [Freesurfer](https://surfer.nmr.mgh.harvard.edu/fswiki/DownloadAndInstall) 
- Matlab
  - Image processing toolbox
  - [Tools for NIfTI and ANALYZE image](https://www.mathworks.com/matlabcentral/fileexchange/8797-tools-for-nifti-and-analyze-image) (NIfTI)
## Expected Data To Begin
- DTI MRI raw data, for example, named `3101.nii.gz`
- bvec and bval gained from sMRI data, for example, named `3101_r.bvec` and `3101_r.bval`
## Step 1: Preprocessing with FSL
Raw imaging data usually come with eddy current distortion and motion distortion. Therefore, we could use FSL eddy_correct to preprocess the data. Also, for better analysis result, we need to remove unnecessary brain tissue such as bones, dura, air, etc. by creating brain mask.
- Preprocess the DTI data  
**eg:** `3101.nii.gz`
    ```bash
    # command format: eddy_correct input_image_path output_filename_path index
    # output files: {name}_EC.ecclog, {name}_EC.nii
    eddy_correct 3101.nii.gz 3101_EC 0

    # command format: bet input_image_path output_filename_path -m -n -f 0.2
    # output files: {name}_brain_mask.nii.gz
    bet 3101.nii.gz 3101_brain -m -n -f 0.2
    ```
## Step 2: Correct gradient table and erode mask
Since we are using FSL for eddy correct and motion correction, we should create a unique gradient table for every subject. We need to adjust it with the ecclog produced when converting dicom file to nii, and rotate it for further usage.
<!-- If you have used the FSL GUI for eddy and movement correction (and not ‘eddy’ or ‘dtipreprocess’), then you will need, for each subject, to create individualised gradient tables
(.bvec) based on the ecclog (called “data.ecclog”, which is an output file after correction is
complete in FSL), as suggested by Leemans and Jones (2009) and Rohde et al. (2004). To do
this, type in the following fdt_rotate_bvecs command
http://jeromemallershandbookofstructuralbrainmrianalysis.yolasite.com/resources/Jeromes_Structural_MRI_analysis_handbook_April2017_Part1.pdf -->
- Process with Matlab code `adjust_bvecs.m`  
- Use the processed DTI's corresponding structural MRI's bvec and bval  
**eg:** `3101_r.bvec`, `3101_r.bval`, `3101_EC.ecclog` (from Step 1)
    ```matlab
    % command format: adjust_bevecs(.ecclog from Step 1, .bvec prepared, output adjusted {name}.bevc)
    adjust_bvecs('D:\ppmi\3101\3101_EC.ecclog','D:\ppmi\3101\3101_r.bvec','D:\ppmi\3101\3101_adjs.bvec')
    ```

For better brain tractography result, the high value points at the brian edge should be removed using the erosion.
<!-- https://brainvisa.info/axon/en/processes/AnaT1toBrainMask.html -->
- Process with Matlab code `myerode.m`  
**eg:** 3101_brain_mask.nii.gz (from Step 1)  
    ```matlab
    % addpath('path to downloaded NIfTI')
    addpath('NIfTI_20140122')
    savepath()

    % command format: myerode('path to brain mask generated in Step 1','output brain mask path')
    % output files: {name}_mask.nii
    myerode('D:\ppmi\3101\3101_brain_mask.nii.gz','D:\ppmi\3101\3101_mask.nii')
    ```

## Step 3: Generate whole brain tractography
We need to run the brain tracktography algorithms to find the fiber tracts connecting different brain regions.
- Edit the first 15 lines of the script `run_dtk.sh` to the following format
    - Diffusion Toolkit installed path
        ```bash
        export PATH="$PATH:/bin/dtk"
        export DSI_PATH="/bin/dtk/matrices"
        ```
    - FSL installed path
        ```bash
        export FSLDIR="/usr/local/fsl"
            . "${FSLDIR}"/etc/fslconf/fsl.sh

        data="(path to folder)/3101_EC.nii.gz"
        bvec="(path to folder)/3101_r.bvec"
        bval="(path to folder)/3101_r.bval"
        FA="(path to folder)/3101_mask.nii"
        temp="(path to folder)/temp"
        output="(path to folder)/dtk"
        ```
- Then run the following code in bash. The generated brian tracktography graph would be placed as a folder in the subject folder named `dtk`. 
    ```bash
    ./run_dtk.sh
    ```
    
## Step 4: Label Generation
We need to determine region of interests (ROIs) and register them from the structure MRI to the brain tractography graph.
- Change the following lines of the `reg_FSROI_Jan2014.sh` to the following format

    - line 7:        Freesurfer installed path
        ```bash
        export FREESURFER_HOME="/usr/local/freesurfer/7.2.0"
        ```

    - line 21:       FSL installed path
        ```bash
        export FSLDIR="/usr/local/fsl"
        ```

    - line 88 & 89  change the second arguments in these two line to the final output of step 2
        ```bash
        ${FSLDIR}/bin/flirt -in brain-in-rawavg.nii -ref {name}_mask.nii -out brain-in-DTI.nii.gz -omat TM.mat -cost corratio -dof 12  -interp nearestneighbour
        ${FSLDIR}/bin/flirt -in FS_label.nii.gz -ref {name}_mask.nii -out label.nii.gz -applyxfm -init TM.mat -interp nearestneighbour
        ```
- Then run the following code in bash. The output would be placed in the subject folder name `label.nii`.
    ```bash
    ./reg_FSROI_Jan2014.sh
    ```
## Step 5: Compute Network
Finally, we could get the brain network based on the registered brain tractography graph. The algorithm could calculate the structural connectivity based on the fiber tracks connecting two regions.
- We need to first overlay the `label.nii` and `dtk\dti_fact_tracts.trk` in the TrackVis to make sure there is no orientation mismatch.
- Run `compute_matrix_Dec_11_2015.m`
    ```matlab
    % command format: compute_matrix_Dec_11_2015(`trk` file from step 3,`label.nii` from step 4, output path, threshold)
    % output files: .mat file containing constructed brain network martrix
    compute_matrix_Dec_11_2015('D:\ppmi\3101\dtk\dti_fact_tracts.trk','D:\ppmi\3101\label.nii','D:\ppmi\3101\3101.mat',5)
    ```
