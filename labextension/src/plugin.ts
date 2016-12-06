// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterLab, JupyterLabPlugin
} from 'jupyterlab/lib/application';

import {
  IRenderMime
} from 'jupyterlab/lib/rendermime';

import {
  IDocumentRegistry
} from 'jupyterlab/lib/docregistry';

import {
  toArray
} from 'phosphor/lib/algorithm/iteration';

import {
  findLastIndex
} from 'phosphor/lib/algorithm/searching';

import {
  JSONRenderer
} from './renderer';

import {
  JSONWidgetFactory
} from './widget';

import './index.css';

/**
 * The file extensions associated with JSON.
 */
const EXTENSIONS = ['.json'];
const DEFAULT_EXTENSIONS = ['.json'];

/**
 * Activate the extension.
 */
function activateJSONPlugin(app: JupyterLab, rendermime: IRenderMime, registry: IDocumentRegistry): void {

  /**
   * Set the index of the renderer.
   * In this case, 'application/json' should yield to any other 'application/*+json' mime types
   */
  const index = findLastIndex(toArray(rendermime.mimetypes()), mimetype => mimetype.endsWith('+json')) + 1;

  /**
   * Add the renderer to the list of renderers.
   */
  rendermime.addRenderer('application/json', new JSONRenderer(), index);

  /**
   * Add file handler for JSON files.
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

  registry.addWidgetFactory(new JSONWidgetFactory(options));

}

const JSONPlugin: JupyterLabPlugin<void> = {
  id: 'jupyter.extensions.json',
  requires: [IRenderMime, IDocumentRegistry],
  activate: activateJSONPlugin,
  autoStart: true
};

export default JSONPlugin;
