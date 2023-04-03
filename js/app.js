const toggleBtn = document.getElementById("theme-toggle"),
  themeLightIcon = document.getElementById("theme-toggle-light-icon"),
  themeDarkIcon = document.getElementById("theme-toggle-dark-icon");

// Choose theme icon on page load
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeLightIcon.classList.remove("hidden");
} else {
  themeDarkIcon.classList.remove("hidden");
}

// Toggle theme with button
toggleBtn.addEventListener("click", themeToggle);

function themeToggle() {
  // Toggle icon
  themeLightIcon.classList.toggle("hidden");
  themeDarkIcon.classList.toggle("hidden");

  // Check the existing theme and change
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
}
