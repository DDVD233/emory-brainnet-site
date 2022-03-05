# DTI Brain Network Consturction
## Preperation:
### System requirement:
- Linux or MacOS (Intel Core)
### Requirements
- [FSL](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FSL)
- [Diffusion Toolkit](http://trackvis.org/)
- [Freesurfer](https://surfer.nmr.mgh.harvard.edu/fswiki/DownloadAndInstall) 
- Matlab
  - Image processing toolbox
  - [Tools for NIfTI and ANALYZE image](https://www.mathworks.com/matlabcentral/fileexchange/8797-tools-for-nifti-and-analyze-image) (NIfTI)
## Step 1: Preprocessing with FSL
- Preprocess the DTI data  
**eg:** 3101.nii.gz
```bash
# to correct for eddy current distortion and motion distortion
# command format: eddy_correct input_image_path output_filename_path index
# output files: (name)_EC.ecclog, (name)_EC.nii
eddy_correct 3101.nii.gz 3101_EC 0

# to make brain mask
# command format: bet input_image_path output_filename_path -m -n -f 0.2
# output files: (name)_brain_mask.nii.gz
bet 3101.nii.gz 3101_brain -m -n -f 0.2
```
## Step 2: Correct gradient table and erode mask
- Process with Matlab code `adjust_bvecs.m`  
- Use the processed DTI's corresponding structual MRI's bvec and bval  
**eg:** 3101_r.bvec, 3101_r.bval, 3101_EC.ecclog (from Step 1)
```matlab
% command format: adjust_bevecs(.ecclog gained from Step 1, .bvec prepared, output file name ends in .bevc)
adjust_bvecs('D:\ppmi\3101\3101_EC.ecclog','D:\ppmi\3101\3101_r.bvec','D:\ppmi\3101\3101_adjs.bvec')
```
- Process with Matlab code `myerode.m`  
**eg:** 3101_brain_mask.nii.gz (from Step 1)  
```matlab
% addpath('path to downloaded NIfTI')
addpath('NIfTI_20140122')
savepath()

% command format: myerode('path to brain mask generated in Step 1','output barin mask path')
% output files: (name)_mask.nii
myerode('D:\ppmi\3101\3101_brain_mask.nii.gz','D:\ppmi\3101\3101_mask.nii')
```

## Step 3: Generate whole brain tractography
- Edit the first 15 lines of the script `run_dtk.sh` to the following format
- Left the others unchanged
```bash
# Diffusion Toolkit installed path
export PATH="$PATH:/bin/dtk"
export DSI_PATH="/bin/dtk/matrices"

# FSL installed path
export FSLDIR="/usr/local/fsl"
    . "${FSLDIR}"/etc/fslconf/fsl.sh

data="(path to folder)/3101_EC.nii.gz"
bvec="(path to folder)/3101_r.bvec"
bval="(path to folder)/3101_r.bval"
FA="(path to folder)/3101_mask.nii"
temp="(path to folder)/temp"
output="(path to folder)/dtk"
```
- Then run:
```bash
./run_dtk.sh
```
## Step 4: Label Generation
- Change the following lines of the `reg_FSROI_Jan2014.sh` to the following format
```bash
# line 7        Freesurfer installed path
export FREESURFER_HOME="/usr/local/freesurfer/7.2.0"

# line 21       fsl installed path
export FSLDIR="/usr/local/fsl"

# line 88 & 89  change the second arguments in these two line to the final output of step 2
${FSLDIR}/bin/flirt -in brain-in-rawavg.nii -ref (name)_mask.nii -out brain-in-DTI.nii.gz -omat TM.mat -cost corratio -dof 12  -interp nearestneighbour
${FSLDIR}/bin/flirt -in FS_label.nii.gz -ref (name)_mask.nii -out label.nii.gz -applyxfm -init TM.mat -interp nearestneighbour
```
- Then run:
```bash
./reg_FSROI_Jan2014.sh
```
## Step 5: Compute Network
- Run `compute_matrix_Dec_11_2015.m`
```matlab
% command format: compute_matrix_Dec_11_2015(`trk` file from step 3,`label.nii` from step 4, output path, threshold)
% output files: .mat file containing constructed brain network martrix
compute_matrix_Dec_11_2015('D:\ppmi\3101\dtk\dti_fact_tracts.trk','D:\ppmi\3101\label.nii','D:\ppmi\3101\3101.mat',5)
```
