# jupyterlab_json

A JupyterLab and Jupyter Notebook extension for rendering JSON

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab ^0.17.0 and/or Notebook >=4.3.0

## Usage

To render JSON output in IPython:

```python
from jupyterlab_json import JSON

JSON({
    "string": "string",
    "array": [1, 2, 3],
    "bool": True,
    "object": {
        "foo": "bar"
    }
})
```

To render a `.json` file as a tree, simply open it:

![file renderer](http://g.recordit.co/cbf0xnQHKn.gif)

## Install

To install using pip:

```bash
pip install jupyterlab_json
# For JupyterLab
jupyter labextension install --py --sys-prefix jupyterlab_json
jupyter labextension enable --py --sys-prefix jupyterlab_json
# For Notebook
jupyter nbextension install --py --sys-prefix jupyterlab_json
jupyter nbextension enable --py --sys-prefix jupyterlab_json
```

## Development

### Set up using install script

Use the `install.sh` script to build the Javascript, install the Python package, and install/enable the notebook and lab extensions:

```bash
bash install.sh --sys-prefix
```

Use the `build.sh` script to rebuild the Javascript:

```bash
bash build.sh
```

### Set up manually

Alternatively, see the `README.md` in `/labextension` and `/nbextension` for extension-specific build instructions. 

To install the Python package:

```bash
pip install -e .
```

To install the extension for JupyterLab:

```bash
jupyter labextension install --symlink --py --sys-prefix jupyterlab_json
jupyter labextension enable --py --sys-prefix jupyterlab_json
```

To install the extension for Jupyter Notebook:

```bash
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_json
jupyter nbextension enable --py --sys-prefix jupyterlab_json
```
