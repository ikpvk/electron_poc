const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

const configPath = path.join(__dirname, "config.json");

app.whenReady().then(() => {
  let url = "https://www.google.com";

  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    if (config.url) url = config.url;
  } catch {
    console.warn("config.json not found or invalid, using default URL");
  }

  if (!/^https?:\/\//i.test(url)) url = "https://" + url;

  const win = new BrowserWindow({ width: 1200, height: 800 });
  win.loadURL(url);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
