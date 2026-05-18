const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });
  win.loadURL("https://www.google.com");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
