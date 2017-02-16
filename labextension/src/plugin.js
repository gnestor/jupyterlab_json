import { IRenderMime } from 'jupyterlab/lib/rendermime';
import { IDocumentRegistry } from 'jupyterlab/lib/docregistry';
import { toArray } from 'phosphor/lib/algorithm/iteration';
import { findLastIndex } from 'phosphor/lib/algorithm/searching';
import { OutputRenderer } from './output';
import { DocWidgetFactory } from './doc';
import './index.css';

/**
 * Activate the extension.
 */
function activatePlugin(app, rendermime, registry) {
  /**
   * Calculate the index of the renderer in the array renderers (e.g. Insert 
   * this renderer after any renderers with mime type that matches "+json") 
   * or simply pass an integer such as 0.
   */
  // const index = findLastIndex(
  //   toArray(rendermime.mimetypes()),
  //   mimetype => mimetype.endsWith('+json')
  // ) + 1;
  const index = 0;

  /**
   * Add the renderer to the registry of renderers.
   */
  rendermime.addRenderer(
    'application/json',
    new OutputRenderer(),
    index
  );

  if ('json') {
    /**
     * Set the extensions associated with JSON.
     */
    const EXTENSIONS = [ '.json' ];
    const DEFAULT_EXTENSIONS = [ '.json' ];

    /**
     * Add file handler for json files.
     */
    let options = {
      fileExtensions: EXTENSIONS,
      defaultFor: DEFAULT_EXTENSIONS,
      name: 'JSON',
      displayName: 'JSON',
      modelName: 'text',
      preferKernel: false,
      canStartKernel: false
    };

    registry.addWidgetFactory(new DocWidgetFactory(options));
  }
}

const Plugin = {
  id: 'jupyter.extensions.JSON',
  requires: 'json'
    ? [ IRenderMime, IDocumentRegistry ]
    : [ IRenderMime ],
  activate: activatePlugin,
  autoStart: true
};

export default Plugin;
