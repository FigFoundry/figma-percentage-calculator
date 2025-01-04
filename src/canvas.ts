import { PluginMessage } from './types/messages';

figma.showUI(__html__, { themeColors: true, width: 400, height: 400 }); // Increased width

figma.ui.onmessage = (msg: PluginMessage) => {
  if (msg.type === 'calculate-percentage') {
    if (msg.result !== null) {
      figma.notify(`Calculation Result: ${msg.result.toFixed(2)}`);
    } else {
      figma.notify('Error in calculation. Please check the input values.');
    }
  }
};