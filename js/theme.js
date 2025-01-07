function toggleCSSTheme() {
  const currentCSSTheme = localStorage.getItem("csstheme") || "lightmode";
  const newCSSTheme =
    currentCSSTheme === "lightmode" ? "darkmode" : "lightmode";
  const baseURL = "/css/";
  document
    .getElementById("csstheme")
    .setAttribute("href", `${baseURL}${newCSSTheme}.css`);
  localStorage.setItem("csstheme", newCSSTheme);
}
if (!localStorage.getItem("csstheme")) {
  localStorage.setItem("csstheme", "lightmode");
}
if (localStorage.getItem("csstheme") == "darkmode") {
  document.getElementById("csstheme").setAttribute("href", `/css/darkmode.css`);
} else {
  document
    .getElementById("csstheme")
    .setAttribute("href", `/css/lightmode.css`);
}
