from IPython.display import display, JSON

# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).

def _jupyter_labextension_paths():
    return [{
        'name': 'jupyterlab_json',
        'src': 'static',
    }]

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyterlab_json',
        'require': 'jupyterlab_json/extension'
    }]

# A display class that can be used within a notebook. 
#   from jupyterlab_json import JSON
#   JSON(data)
    
class JSON(JSON):
    """A display class for displaying JSON visualizations in the Jupyter Notebook and IPython kernel.
    
    JSON expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    def _ipython_display_(self):
        bundle = {
            'application/json': self.data,
            'text/plain': '<jupyterlab_json.JSON object>'
        }
        metadata = {
            'application/json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
