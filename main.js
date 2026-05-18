const { app, BrowserWindow } = require("electron");

function promptHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #1a1a2e; color: #eee; height: 100vh; display: flex;
  align-items: center; justify-content: center; overflow: hidden;
}
#box { text-align: center; }
h1 { font-size: 28px; font-weight: 500; margin-bottom: 24px; color: #e0e0e0; }
#row { display: flex; gap: 8px; justify-content: center; }
input {
  width: 480px; padding: 12px 16px; font-size: 15px; border: 1px solid #444;
  border-radius: 6px; background: #0f3460; color: #eee; outline: none;
}
input:focus { border-color: #e94560; }
button {
  padding: 12px 24px; font-size: 15px; border: none; border-radius: 6px;
  background: #e94560; color: #fff; cursor: pointer; font-weight: 500;
}
button:hover { background: #ff6b81; }
</style>
</head>
<body>
<div id="box">
  <h1>Enter a URL</h1>
  <div id="row">
    <input id="url" type="text" placeholder="https://example.com" autofocus />
    <button id="go">Launch</button>
  </div>
</div>
<script>
function launch() {
  var url = document.getElementById("url").value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  window.location.href = url;
}
document.getElementById("go").addEventListener("click", launch);
document.getElementById("url").addEventListener("keydown", function(e) {
  if (e.key === "Enter") launch();
});
</script>
</body>
</html>`;
}

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1200, height: 800 });
  win.loadURL("data:text/html," + encodeURIComponent(promptHTML()));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
