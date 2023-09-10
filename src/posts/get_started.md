
[//]: # (<img src="images/braingb_logo.png" width="100%" alt="BrainGB">)

# Get Started

BrainGB is a python package for testing Graph Neural Networks on Brain Networks.

# Installation

To install BrainGB as a package, simply run
```shell
pip install BrainGB
```

Alternatively, you can also download the repository from Github. The main package is under the src folder. If you choose to go with this method, please check the [Specification of Dependencies](#Specification-of-Dependencies) section for dependency requirements.

# Specification of Dependencies

BrainGB depends on the following frameworks:

```
torch~=1.10.2
numpy~=1.22.2
nni~=2.4
PyYAML~=5.4.1
scikit-learn~=1.0.2
networkx~=2.6.2
scipy~=1.7.3
tensorly~=0.6.0
pandas~=1.4.1
libsvm~=3.23.0.4
matplotlib~=3.4.3
tqdm~=4.62.3
torch-geometric~=2.0.3
h5py~=3.6.0
```

To install the dependencies, run:
```shell
pip install -r requirements.txt
```

Notice that if you install the package through pip, the dependencies are automatically installed.

# Getting Started

To import the models detailed in the paper:
```python
from BrainGB.models import GAT, GCN, BrainNN
```

The BrainNN is required and will be served as the parent module of the GAT, GCN models. You may choose either GAT or GCN as the submodule.

To initialize a GCN model
```python
sample: Data = Data()  # A torch geometric data

num_features = data.x.shape[1]
num_nodes = data.x.shape[0]
gcn_model = GCN(num_features, num_nodes)

model = BrainNN(args.pooling, gcn_model, MLP(2 * num_nodes))
```

To initialize a GAT model, simply replace the GCN with GAT. Both models are customizable. Please refer to the [Advanced Usage](/advanced) page for more details.

# Running Example Scripts

The repository also comes with example scripts. To train our model on any of the datasets we tested, simply run:
```shell
python -m main.example_main --dataset_name=<dataset_name> [--model_name=<model_name> --gcn_mp_type=<mp_mechanism>  --gat_mp_type=<attention_mp_mechanism> --node_features=<feature_name> --pooling=<pooling_name> --n_GNN_layer=<GNN_num> --n_MLP_layers=<MLP_num> --hidden_dim=<hidden_layer_dimension> --epochs=<epoch_num> --k_fold_splits=<split_num> --test_interval=<evaluation_interval_num>]
```

The `dataset_name` is the name of the dataset to use (required parameter). We include the following four datasets in our paper:

- HIV
- PNC (Can be downloaded [here](https://www.nitrc.org/projects/pnc/))
- PPMI (Can be downloaded [here](https://www.ppmi-info.org/access-data-specimens/download-data))
- ABCD (Can be downloaded [here](https://nda.nih.gov/abcd))

You can also construct your own datasets by following the instructions on neuroimaging preprocessing and [functional](https://brainnet.us/fmri-instructions/) or [structural](https://brainnet.us/dti-instructions/) brain network construction on our website.

Please place the dataset files in the `datasets` folder under the package examples folder. Create the folder if it does not exist.

The `model_name` specifies the backbone model type. Choose `gcn` to test the message passing variants without attention and `gat` to test the attention-enhanced message passing mechanisms. Specifically, use `gcn_mp_type` to set a message vector design and use `gat_mp_type` to set an attention-enhancing mechanism.

The `node_features` specifies the artificial node feature initialization for each brain region.

The `pooling` specifies the pooling strategy to get a graph-level representation for each subject.

You can also change other hyper-parameters, such as `--n_GNN_layer`, `--n_MLP_layers`, `--hidden_dim`, `--epochs`, etc., to adjust the detailed model design or control the training process. All those hyper-parameters can be automatically searched and optimized using the AutoML tool [NNI](https://github.com/microsoft/nni) by passing `--enable_nni`.

# Contribution

We welcome contributions to the package. Please feel free to open an issue or pull request. 
