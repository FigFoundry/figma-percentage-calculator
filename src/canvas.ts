import { PluginMessage } from './types/messages';

figma.showUI(__html__, { themeColors: true, width: 280, height: 280 });

figma.ui.onmessage = (msg: PluginMessage) => {
  if (msg.type === 'calculate-percentage') {
    if (msg.result !== null) {
      figma.notify(`Calculation Result: ${msg.result.toFixed(2)}`);
    } else {
      figma.notify('Error in calculation. Please check the input values.');
    }
  }
};