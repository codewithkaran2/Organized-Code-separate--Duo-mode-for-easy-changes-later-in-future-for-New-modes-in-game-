// main.js

// Utility function to load a script dynamically.
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.src = url;
  script.defer = true;
  script.onload = callback;
  document.body.appendChild(script);
}

// Overwrite the startGame function. When the user clicks "Start Game"
// the main script will load the correct mode file (duoMode.js here) dynamically.
function startGame() {
  // For now, always load duo mode.
  loadScript("duoMode.js", function () {
    if (typeof duoStartGame === "function") {
      duoStartGame();
    }
  });
}

// Expose startGame globally so the HTML inline onclick can call it.
window.startGame = startGame;
