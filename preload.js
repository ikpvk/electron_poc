const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  navigateTo: (url) => ipcRenderer.send("navigate-to", url),
});
