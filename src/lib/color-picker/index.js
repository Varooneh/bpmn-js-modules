import ColorPicker from './colorpicker.lib';
import ColoredRenderer from './colorpicker.renderer.lib';

export default {
  __init__: [ 'colorPicker', 'coloredRenderer' ],
  colorPicker: [ 'type', ColorPicker ],
  coloredRenderer: [ 'type', ColoredRenderer ]
};