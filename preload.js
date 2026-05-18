const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("windowControls", {
  minimize: () => ipcRenderer.send("minimize"),
  maximize: () => ipcRenderer.send("maximize"),
  close: () => ipcRenderer.send("close"),
  onMaximizeChange: (callback) => {
    ipcRenderer.on("maximize-change", (_event, isMaximized) => callback(isMaximized));
  },
});
