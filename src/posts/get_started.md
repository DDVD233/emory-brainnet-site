# Get Started

There are two ways you can get the Brain Network datasets and tools:
1. Install through pip
2. Manually download

The first approach is recommended. 

## Install through pip

To install the brain network package using pip, simply type:

```shell
pip install brain-network
```

Make sure you have installed `torch` and `torch-geometrics`. The instructions for installing `PyTorch` can be found [here](https://pytorch.org/). To install `PyTorch-Geometric`, you can follow [these instructions](https://pytorch-geometric.readthedocs.io/en/latest/).

## Usage

Brain network package comes with 2 brain network datasets. The information for each dataset can be found [here](/datasets). 

To load a dataset, first load the dataset class.

```python
from BrainNet.BrainDataset import BrainDataset
```

Then you can load each dataset through the following commands:

```python
hiv_dataset = BrainDataset(root='datasets/', name='HIV')  # load HIV dataset
bp_dataset = BrainDataset(root='datasets/', name='BP')  # load BP dataset
```

The `BrainDataset` initializer takes two arguments, root and name. `root` is the root folder where the dataset stores. The `name` is the name of the dataset you wish to use. Currently, the options are `BP` and `HIV`. 

You can also apply some pre-transformation as a part of the initializing process:

```python
# load BP dataset with pre_transform
bp_dataset = BrainDataset(root='datasets/', name='BP', 
                          pre_transform=FromSVTransform(Node2Vec(num_workers=8)))
```

The variable `dataset.data` stores the structured torch-geometric dataset. You can use it to train your model. 

Putting it all together:

```python
from BrainNet.BrainDataset import BrainDataset

bp_dataset = BrainDataset(root='datasets/', name='BP', 
                          pre_transform=FromSVTransform(Node2Vec(num_workers=8)))
                          
// Training...
```

## Manual Download

You can also directly download the dataset through the [datasets](/datasets) page. 
