const names = [
  "Blasphemous",
  "Blasphemous 2",
  "DarkSouls 1",
  "DarkSouls 2",
  "DarkSouls 3",
  "Eldenring",
];

const pictureLinks = [
  "games/Blasphemous/img_blasphemous/Title_img.webp",
  "games/Blasphemous_2/img_blasphemous_2/Title_img.webp",
  "games/DarkSouls_1/img_darksouls_1/Title_img.webp",
  "games/DarkSouls_2/img_darksouls_2/Title_img.webp",
  "games/DarkSouls_3/img_darksouls_3/Title_img.webp",
  "games/Eldenring/img_eldenring/Title_img.webp",
];

const descriptions = [
  "Blasphemous is a brutal action-platformer with skilled hack'n slash combat",
  "The Penitent One awakens as Blasphemous 2 joins him once again in an endless struggle against The Miracle.",
  "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all.",
  "Dark Souls 2 is the highly anticipated sequel to the gruelling 2011 breakout hit Dark Souls.",
  "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series.",
  "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
];

const hyperlinks = [
  "games/Blasphemous/blasphemous.html",
  "games/Blasphemous_2/blasphemous_2.html",
  "games/DarkSouls_1/DarkSouls_1.html",
  "games/DarkSouls_2/DarkSouls_2.html",
  "games/DarkSouls_3/DarkSouls_3.html",
  "games/Eldenring/Eldenring.html",
];

// Function to display a random game
function displayRandomGame() {
  const randomIndex = Math.floor(Math.random() * names.length);

  // Update the HTML elements with the selected game data
  document.querySelector(".titleH3").textContent = names[randomIndex];
  document.querySelector(".titelH4").textContent = "Game of The Month"; // You can change this if needed
  document.getElementById("gMonthIMG").src = pictureLinks[randomIndex];
  document.querySelector(".paragraph").textContent = descriptions[randomIndex];
  document.querySelector("button a").href = hyperlinks[randomIndex];
  document.querySelector("button a").textContent = "Learn More"; // Button text
}

// Call the function to display a random game on page load
window.onload = displayRandomGame;
