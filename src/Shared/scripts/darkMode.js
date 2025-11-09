export function initThemeToggle(toggleId = "theme-toggle", navbarId = "navbar") {
  const btn = document.getElementById(toggleId);
  const navbar = document.getElementById(navbarId);

  if (!btn || !navbar) return;

  // Leer theme guardado o por defecto
  let theme = localStorage.getItem("theme") || "light";

  function applyTheme(theme) {
    if (theme === "dark") {
      navbar.classList.remove("navbar-light-custom");
      navbar.classList.add("navbar-dark-custom");
      btn.textContent = "☀️";
    } else {
      navbar.classList.remove("navbar-dark-custom");
      navbar.classList.add("navbar-light-custom");
      btn.textContent = "🌙";
    }
    document.documentElement.setAttribute("data-theme", theme);
  }

  applyTheme(theme);

  btn.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  });
}
