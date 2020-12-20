const startGame = document.getElementById("startGame");
const difficulty = document.getElementById("difficulty");

startGame.addEventListener("click", () => {
  if (difficulty.value === "") {
    return;
  }
  window.location.assign("Pages/game.html?" + difficulty.value);
})