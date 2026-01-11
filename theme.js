const THEME_KEY = "THEME_MODE";

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(THEME_KEY, mode);
}

function toggleTheme() {
  const current = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

// init
setTheme(localStorage.getItem(THEME_KEY) || "dark");
