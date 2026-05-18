const urlInput = document.getElementById("url-input");
const goBtn = document.getElementById("go-btn");
const homeView = document.getElementById("home-view");
const webview = document.getElementById("webview");
const backBtn = document.getElementById("back-btn");
const maxBtn = document.getElementById("max-btn");

document.getElementById("min-btn").addEventListener("click", () => window.windowControls.minimize());
maxBtn.addEventListener("click", () => window.windowControls.maximize());
document.getElementById("close-btn").addEventListener("click", () => window.windowControls.close());

window.windowControls.onMaximizeChange((isMaximized) => {
  maxBtn.textContent = isMaximized ? "❐" : "□";
  maxBtn.title = isMaximized ? "Restore down" : "Maximize";
});

backBtn.style.display = "none";

function navigateTo(url) {
  let targetUrl = url.trim();
  if (!targetUrl) return;

  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = "https://" + targetUrl;
  }

  homeView.style.display = "none";
  webview.style.display = "flex";
  backBtn.style.display = "flex";

  webview.loadURL(targetUrl);
}

function goHome() {
  webview.style.display = "none";
  homeView.style.display = "flex";
  backBtn.style.display = "none";
  urlInput.value = "";
  urlInput.focus();
}

goBtn.addEventListener("click", () => navigateTo(urlInput.value));
urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") navigateTo(urlInput.value);
});
backBtn.addEventListener("click", goHome);
