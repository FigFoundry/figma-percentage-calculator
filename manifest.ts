// https://www.figma.com/plugin-docs/manifest/

export default {
  name: "Percentage Calculator",
  id: "1457235675961983844",
  api: "1.0.0",
  editorType: ["figma", "figjam"],
  main: "./canvas.js",
  ui: "./plugin.html",
  documentAccess: "dynamic-page",
  networkAccess: {
    allowedDomains: ["none"],
  },
};
