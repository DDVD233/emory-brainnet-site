# Advanced Usage

We provide a number of parameters so that the BrainGB model can be customized. The details of each parameter are described below.

## Message Passing Mechanisms
In `models.gcn`, BrainGB provides the base class `MPGCNConv` and different message vector designs including:
| Message Passing Mechanisms   | Option Name          |
| ------------------------------------ | ------------------- |
| Edge Weighted | `weighted_sum`  |
| Bin Concat        | `bin_concate` |
| Edge Weight Concat | `edge_weight_concate`  |
| Node Edge Concat        | `edge_node_concate` |
| Node Concat        | `node_concate` |

To adjust the message passing schemes, simply set the input parameter `model_name` as `gcn` and chose an option name for the parameter `gcn_mp_type`.

## Attention-Enhanced Message Passing
In `models.gat`, BrainGB provides the base class `MPGATConv` and different versions of attention-enhanced message passing designs including:
| Message Passing Mechanisms                    | Option Name          |
| ------------------------------------ | ------------------- |
| Attention Weighted | `attention_weighted`  |
| Edge Weighted w/ Attn        | `attention_edge_weighted` |
| Attention Edge Sum | `sum_attention_edge`  |
| Node Edge Concat w/ Attn        | `edge_node_concate` |
| Node Concat w/ Attn        | `node_concate` |

Note that some of these options are corresponding attention enhanced version of the message passing mechanism designs. Please refer to our paper for more details.

To adjust the attention-enhanced message passing schemes, simply set the input parameter `model_name` as `gat` and chose an option name for the parameter `gat_mp_type`.

## Pooling Strategies
The pooling strategy is controlled by setting the `self.pooling` in the chosen model. Specifically, BrainGB implements the following three basic pooling strategies:
| Pooling Strategies                    | Option Name          |
| ------------------------------------ | ------------------- |
| Mean Pooling | `mean`  |
| Sum Pooling        | `sum` |
| Concat Pooling | `concat`  |

To adjust the pooling strategies, simply set the chosen option name for the input parameter `pooling`.