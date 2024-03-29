[//]: # (<img src="images/braingb_logo.png" width="100%" alt="BrainGB">)

# **Guide to Using BrainGB**

This guide provides a tutorial on running direct experiments with BrainGB and integrating BrainGB into your existing research projects. Follow the sections below to learn more.

All source code is stored at [BrainGB's GitHub repository](https://github.com/HennyJie/BrainGB).

### **Table of Contents**
1. [Direct Experiments with BrainGB](#part-i-direct-experiments-with-braingb)
    - [Obtaining Datasets](#1-obtaining-datasets)
    - [Quick Setup](#2-quick-setup)
    - [Running Example](#3-running-example)
2. [Integrating BrainGB into Your Workflow](#part-ii-integrating-braingb-into-your-workflow)
    - [Install BrainGB as a Package](#1-install-braingb-as-a-package)
    - [Incorporating BrainGB Models](#2-incorporating-braingb-models)

---

<h2 id="part-i-direct-experiments-with-braingb">Part I: Direct Experiments with BrainGB</h2>

<h3 id="1-obtaining-datasets">1. Obtaining Datasets</h3>

#### **ABIDE Dataset**
We understand the challenges faced by researchers in accessing certain datasets due to restrictions. To facilitate your experimentation with BrainGB, we provide the [Autism Brain Imaging Data Exchange (ABIDE) dataset](http://fcon_1000.projects.nitrc.org/indi/abide/abide_I.html), which is publicly accessible and does not require special access permissions. 

- [Download and Preprocess ABIDE dataset here](https://github.com/HennyJie/BrainGB/tree/master/examples/utils/get_abide)


#### **Datasets Requiring Access**
For a detailed exploration of other datasets like **PNC**, **PPMI**, and **ABCD** utilized in our BrainGB studies, which are not publicly accessible and require specific access permissions, please refer to the following:

- [Other Datasets and Decription](https://braingb.us/datasets/)

- [Preprocessing Steps and Protocols](https://braingb.us/preprocessing/)


You can also construct your own datasets by following the instructions on neuroimaging preprocessing and functional or structural brain network construction on our [website](https://braingb.us/preprocessing/).

---

<h3 id="2-quick-setup">2. Quick Setup</h3>

Clone the repository and Install required dependencies:
```shell
git clone https://github.com/HennyJie/BrainGB.git
```
It is recommended to use commands such as 'virtualenv' to create separate Python environments, in order to prevent conflicts in environment configurations:
```shell
virtualenv -p python3 venv
source venv/bin/activate
```
**Install Dependencies:**
BrainGB depends on the following packages. **The packages listed below are dependencies for systems with CUDA version 10.1. If you are using a different version of CUDA, please ensure to install the respective versions of these dependencies that are compatible with your CUDA version**. See [Pytorch version with different CUDA versions](https://pytorch.org/get-started/previous-versions/):
```
torch~=1.8.1+cu101
torch-cluster~=1.5.9
torch-scatter~=2.0.8       
torch-sparse~=0.6.12
torch-spline-conv~=1.2.1
torch-geometric~=2.0.4
numpy~=1.22.2
nni~=2.4
scikit-learn~=1.0.2
networkx~=2.6.2
scipy~=1.7.3
pandas~=1.2.3
```
First, install some of the dependencies with:
```shell
pip install -r requirements.txt
```
Next, install Pytorch:
```shell
pip install torch==1.8.1+cu101 torchvision==0.9.1+cu101 torchaudio==0.8.1 -f https://download.pytorch.org/whl/torch_stable.html
```
Finally, install torch-cluster, torch-scatter, torch-sparse, torch-spline-conv and torch-geometric
```shell
pip install https://data.pyg.org/whl/torch-1.8.0%2Bcu101/torch_cluster-1.5.9-cp38-cp38-linux_x86_64.whl
pip install https://data.pyg.org/whl/torch-1.8.0%2Bcu101/torch_scatter-2.0.8-cp38-cp38-linux_x86_64.whl
pip install https://data.pyg.org/whl/torch-1.8.0%2Bcu101/torch_sparse-0.6.12-cp38-cp38-linux_x86_64.whl
pip install https://data.pyg.org/whl/torch-1.8.0%2Bcu101/torch_spline_conv-1.2.1-cp38-cp38-linux_x86_64.whl
pip install torch-geometric~=2.0.4
```

**Note**: If you face problems when installing dependencies like torch-cluster, torch-scatter, torch-sparse, torch-spline-conv, and torch-geometric, it is recommended to manually install the respective version of these packages using the **'.whl'** files available on their official website.

---

<h3 id="3-running-example">3. Running Example</h3>

Use the ABIDE dataset as an example, you should first place the dataset file "abide.npy" (genereated from [step 1](#1-obtaining-datasets)) in the `datasets` folder under the `examples` folder (Create the folder if it does not exist). The `abide.npy` file contains the following contents:

- **timeseries**: Represents the BOLD time series data for each subject. It's a numpy array with the shape (#sub, #ROI, #timesteps).
  
- > **Label**: Provides the diagnosis label for Autism spectrum disorder for each subject. '0' denotes negative, and '1' indicates positive. It's a numpy array of shape (#sub).
  
- > **corr**: The correlation matrix calculated from BOLD time series data. It's a numpy array with the shape (#sub, #ROIs, #ROIs).
  
- **pcorr**: Represents the partial correlation matrix derived from the BOLD time series data. It's a numpy array with dimensions (#sub, #ROIs, #ROIs).
  
- **site**: Specifies where the data was collected for each subject. It's a numpy array with shape (#sub).

**`Important Note`**: `"Label"` and `"corr matrix"` are the actual *inputs* for BrainGB. `Label` represents the target outcome we are interested in predicting, often indicating the diagnosis or condition of a subject in a brain study. `corr matrix` describes the associated Brain Network. If you are considering running BrainGB using your own dataset, it's important to format your Label and corr matrix similarly to ensure compatibility and accurate results. Ensure that `Label` is in a *numpy array* of shape **(#sub)** and `corr matrix` is structured as a *numpy array* with the shape **(#sub, #ROIs, #ROIs)**.<br><br>



**Run the BrainGB code, execute the following command**:
```shell
python -m examples.example_main --dataset_name ABIDE --pooling concat --gcn_mp_type edge_node_concate --hidden_dim 256
```
The parameter `pooling` specifies the pooling strategy to get a graph-level representation for each subject and `gcn_mp_type` sets a message vector design for the `gcn` model. If you choose `gat` as the backbone model, you can use `gat_mp_type` to set an attention-enhancing mechanism.

For other hyper-parameters like `--n_GNN_layer`, `--n_MLP_layers`, `--hidden_dim`, `--epochs`, etc., you can modify them to adjust the detailed model design or control the training process. If you'd like to automatically search and optimize these hyper-parameters, use the AutoML tool NNI with the `--enable_nni` command.

For detailed explanations and additional parameters, consult the code comments or the [Advanced page](https://braingb.us/advanced/).


Upon successful execution, you should observe an output similar to this:

```plaintext
Processing...
Done!
2023-09-10 15:54:28,486 - Loaded dataset: ABIDE
...
2023-09-10 15:56:29,493 - (Train Epoch 9), test_micro=66.34, test_macro=65.10, test_auc=72.91
...
2023-09-10 17:37:46,561 - (Train Epoch 99), test_micro=64.68, test_macro=64.59, test_auc=70.03
2023-09-10 17:37:47,489 - (Initial Performance Last Epoch) | test_micro=64.68, test_macro=64.59, test_auc=70.03
2023-09-10 17:37:47,489 - (K Fold Final Result)| avg_acc=65.31 +-  1.58, avg_auc=71.29 +- 2.89, avg_macro=64.43 +- 1.87
```

---
<h2 id="part-ii-integrating-braingb-into-your-workflow">Part II: Integrating BrainGB into Your Workflow</h2>

<h3 id="1-install-braingb-as-a-package">1. Install BrainGB as a package</h3>

To integrate BrainGB into your research projects and leverage its capabilities, install the package via your package manager:

```shell
pip install BrainGB
```
Notice that if you install the package through pip, the dependencies are automatically installed.

<h3 id="2-incorporating-braingb-models">2. Incorporating BrainGB Models</h3>

BrainGB provides modular components, making it easier to integrate with various projects. Import the necessary modules and initialize the models according to your research needs.

```python
from BrainGB.models import GAT, GCN, BrainNN
```
The BrainNN is required and will be served as the parent module of the GAT, GCN models. You may choose either GAT or GCN as the submodule.

**Model Initialization**:  
For a GCN-based setup:
```python
sample: Data = Data()  # A torch geometric data
num_features = data.x.shape[1]
num_nodes = data.x.shape[0]
gcn_model = GCN(num_features, num_nodes)
model = BrainNN(args.pooling, gcn_model, MLP(2 * num_nodes))
```
For a GAT-based setup, simply replace the GCN model initializations with GAT. Further model customization options are available on the [Advanced page](https://braingb.us/advanced/).


## **Contribution**

We welcome contributions to the package. Please feel free to open an issue or pull request.
