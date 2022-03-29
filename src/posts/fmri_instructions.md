# Functional Brain Network Construction
The functional brain network construction is a BIDS-formatted fMRI data processing pipeline for general researchers to build their own functional brain network from fMRI data.This pipeline is based on the [ABCD-HCP BIDS fMRI Pipeline](https://github.com/DCAN-Labs/abcd-hcp-pipeline).
## Preparation:
### System requirement:
- Linux or MacOS (Intel Core)
### Requirements
- [Docker](https://docs.docker.com/get-docker/) or [Singularity](https://sylabs.io/guides/3.5/user-guide/quick_start.html)
- [FreeSurfer license](https://surfer.nmr.mgh.harvard.edu/fswiki/License)

## Install the Pipeline
- With Docker
    ```shell
    docker pull dcanumn/abcd-hcp-pipeline
    ```
- With Singularity
    ```shell
    singularity pull docker://dcanumn/abcd-hcp-pipeline

    singularity build abcd-hcp-pipeline.sif docker://dcanumn/abcd-hcp-pipeline
    ```
## Run the Pipeline
- The raw data should be in BIDS format
- With Docker
    ```shell
    docker run --rm \
    -v /path/to/bids_dataset:/bids_input:ro \
    -v /path/to/outputs:/output \
    -v /path/to/freesurfer/license:/license \
    dcanumn/abcd-hcp-pipeline /bids_input /output --freesurfer-license=/license.txt [OPTIONS]
    ```
- With Singularity
    ```shell
    env -i singularity run \
    -B /path/to/bids_dataset:/bids_input \
    -B /path/to/outputs:/output \
    -B /path/to/freesurfer/license.txt:/opt/freesurfer/license.txt \
    ./abcd-hcp-pipeline.sif /bids_input /output --freesurfer-license=/opt/freesurfer/license.txt [OPTIONS]
    ```
## More Options

    ```shell
    
    Positional Arguments:
        bids_dir                Path to the BIDS data.

        output_dir              Path to the output directory.

    Optional Arguments:

        -h / --help             Show the function help and exit.

        -v / --version          Show the version of the package and exit.

        --participant-label     ID [ID...]
                                Specify the participant ID desired to run.
                                Default is to run all participant in the directory.
        --session-id            SESSION_ID [SESSION_ID ...]

                                Specify the Session ID desired to run. (Exclude "ses-")
                                Default is to run all participant in the directory.

        --freesurfer-license    LICENSE_FILE

        --all-sessions          Merge all sessions into one for each subject.

        --ncpus                 NCPUS
                                Number of cores to run the pipeline.

        --stage                 STAGE
                                Specified the desired substage to run.

        --bandstop              LOWER UPPER
                                Motion regressor band-stop filtering parameter.

        --custom-clean          JSON
                                Run the DCAN automatic cleaning script based on the 
                                specified file structure provided after the pipeline.

        --study-template        HEAD BRAIN
                                Head and brain template for intermediate
                                nonlinear registration and masking.

        --ignore {func,dwi}     Ignore the modality in processing.

    Runtime Arguments: (For debugging use)
        --check-outputs-only   Check the existence of the output.

        --print-commands-only   Only print out the command used to run each stage.

        --ignore-expected-outputs
                                Continue the pipeline with missing expected output.
                                
    ```
