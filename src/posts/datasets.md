![PPMI](images/ppmi-logo.png '#float=right;width=250px;')

## [Parkinson's Progression Markers Initiative (PPMI)](https://www.ppmi-info.org/)

This dataset is from a collaborative study for Parkinson’s Research
to improve PD therapeutics. We consider the DTI acquisition
of 754 subjects, with 596 Parkinson’s disease patients and
158 healthy controls. The raw data are first aligned to correct
for head motion and eddy current distortions. Then the
non-brain tissue is removed and the skull-stripped images
are linearly aligned and registered. 84 ROIs are parcellated
from T1-weighted structural MRI and the brain network is
reconstructed using the deterministic 2nd-order Runge-Kutta
(RK2) whole-brain tractography algorithm. 

&nbsp;

![PNC](images/nitrc-logo.png '#float=right;width=250px;')

## [Philadelphia Neuroimaging Cohort (PNC)](https://www.nitrc.org/projects/pnc/)

This rs-fMRI dataset is from the Brain Behavior Laboratory at the
University of Pennsylvania and the Children’s Hospital of
Philadelphia. 289 (57.46%) of the 503 included subjects are
female, indicating this dataset is balanced across genders. The
regions are parcellated based on the 264-node atlas defined
by [Power et al](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3222858/). The preprocessing includes slice timing
correction, motion correction, registration, normalization,
removal of linear trends, bandpass filtering, and spatial
smoothing. In the resulting data, each sample contains 264
nodes with time-series data collected through 120 time steps.
We focus on the 232 nodes in the Power’s atlas associated
with major resting-state functional modules.

&nbsp;

![ABCD](images/logo_abcd_r_small.jpg '#float=right;width=250px;')

## [Adolescent Brain Cognitive Development Study (ABCD)](https://nda.nih.gov/abcd)

This study recruits children aged 9-10 years across 21 sites
in the U.S. Each child is followed into early adulthood, with
repeated imaging scans, as well as extensive psychological
and cognitive testing. After selection, 7,901 children
are included in the analysis, and 3,961 (50.1%) among
them are female. We use rs-fMRI scans for the baseline
visit processed with the standard and open-source ABCD-HCP BIDS fMRI Pipeline17. After processing, each sample
contains a connectivity matrix whose size is 360 ×360 and
BOLD time-series for each node. The region definition is
based on the HCP 360 ROI atlas. 


You can read more about fMRI and DTI [here](https://www.mayfieldclinic.com/pe-fmri_dti.htm).


[//]: # (![HIV Sample]&#40;images/HIV-Sample.png '#float=right;width=240px;'&#41;)

[//]: # ()
[//]: # (## Human Immunodeficiency Virus Infection &#40;HIV&#41;)

[//]: # ()
[//]: # (Human Immunodeficiency Virus Infection &#40;HIV&#41; dataset contains two views. One of which is collected from functional magnetic resonance imaging &#40;fMRI&#41;. The other is collected from Diffusion Tensor Imaging &#40;DTI&#41;. Both includes 35 samples from patients &#40;positive&#41; and 35 healthy controls &#40;negative&#41;. Each graph contains 90 nodes &#40;ROIs&#41; and the edge weights corresponding to the adjacency matrix are calculated as the correlations between brain regions. )

[//]: # ()
[//]: # (![BP Sample]&#40;images/BP-Sample.png '#float=right;width=240px;'&#41;)

[//]: # ()
[//]: # (## Bipolar Disorder &#40;BP&#41;)

[//]: # ()
[//]: # (Bipolar Disorder &#40;BP&#41; dataset also contains two views: fMRI and DTI. It consists of 52 bipolar subjects and 45 healthy controls with matched age and gender. It stimulates 82 brain regions, according to Freesurfer-generated cortical/subcortical gray matter regions. Functional brain networks are derived using pairwise BOLD signal correlations.)