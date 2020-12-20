let screenWidth = window.innerWidth,
  screenHeight = window.innerHeight,
  lifes = 3,
  points = 0,
  quantityFlies = 0,
  time = 15;
const difficulty = window.location.search,
  fly = document.createElement("img"),
  timeSpan = document.getElementById("time"),
  lostLife = document.createElement("img");
lostLife.src = "../Images/life.png";

function setDifficulty() {
  switch (difficulty) {
    case "?easy":
      return createFlyPerMilliseconds = 3000;
    case "?hard":
      return createFlyPerMilliseconds = 1500;
    case "?impossible":
      return createFlyPerMilliseconds = 1000;
  }
}

function createFly() {
  fly.src = "../Images/fly.png";

  removeFlyIfExists();

  fly.id = "fly";
  fly.className = setFlySize();
  fly.style.position = "absolute";
  fly.style.left = createCoordinateX() + "px";
  fly.style.top = createCoordinateY() + "px";
  fly.style.transform = setFlySide();

  document.body.appendChild(fly);
  quantityFlies++;
}

function setFlySize() {
  let rand = Math.ceil(Math.random() * 3);
  switch (rand) {
    case 1:
      return "smallFly";
    case 2:
      return "mediumFly";
    case 3:
      return "bigFly";
    default:
      return "mediumFly";
  }
}

function setFlySide() {
  if (Math.round(Math.random() * 1) === 0) {
    return "scaleX(-1)";
  }
  return "scaleX(1)";
}

function createCoordinateX() {
  let result = Math.round(Math.random() * screenWidth) - 90;
  return result < 0 ? 0 : result;
}

function createCoordinateY() {
  let result = Math.round(Math.random() * screenHeight) - 90;
  return result < 0 ? 0 : result;
}

function removeFlyIfExists() {
  if (document.getElementById("fly")) {
    document.getElementById("fly").remove();
    lostALife();
  }
}

function lostALife() {
  document.getElementById("l" + lifes).src = "../Images/lostLife.png";
  lifes--;
  gameOver();
}

function gameOver() {
  if (lifes < 1) {
    window.location.assign("../Pages/game_over.html");
  }
}

const chrono = function chronometer() {
  time--
  timeSpan.textContent = time;
  timeOut();
}

function timeOut() {
  if (time == 0) {
    clearInterval(chrono);
    window.location.assign("../Pages/win.html");
  }
}

fly.addEventListener("click", () => {
  points++;
  fly.remove();
});

setInterval(createFly, setDifficulty());
setInterval(chrono, 1000);

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
});