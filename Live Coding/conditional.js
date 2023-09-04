const prefersDarkMode = false;
const prefersSolarized = true;

if (prefersDarkMode) {
  console.log("dark mode set");
  document.body.style.background = "black";
} else if (prefersSolarized) {
  console.log("solarizerd mode set");
} else {
  console.log("light mode set");
  document.body.style.background = "ghostwhite";
}
