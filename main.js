console.log("Welcome to emmanueledurante.it, you are looking at the console");

const THEME_KEY = "ed_theme";

function setTheme(themeName) {
  const themeLinks = {
    graffiti: document.getElementById("theme-graffiti"),
    mvp: document.getElementById("theme-mvp"),
    pico: document.getElementById("theme-pico")
  };

  Object.entries(themeLinks).forEach(([name, el]) => {
    if (!el) return;
    el.disabled = name !== themeName;
  });

  try {
    localStorage.setItem(THEME_KEY, themeName);
  } catch {
    // ignore
  }
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "graffiti" || stored === "mvp" || stored === "pico")
      return stored;
  } catch {
    // ignore
  }
  return "graffiti";
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(getInitialTheme());

  const switcher = document.getElementById("theme-switcher");
  if (!switcher) return;

  switcher.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-theme]");
    if (!btn) return;
    const theme = btn.getAttribute("data-theme");
    if (theme === "graffiti" || theme === "mvp" || theme === "pico") {
      setTheme(theme);
    }
  });
});
