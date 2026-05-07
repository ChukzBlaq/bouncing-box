const box = document.getElementById("box");

let x = 100;
let y = 100;
let dx = 3;
let dy = 3;

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function animate() {
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  x += dx;
  y += dy;

  // Bounce on left/right walls
  if (x <= 0 || x + boxWidth >= screenWidth) {
    dx = -dx;
    box.style.background = getRandomColor();
  }

  // Bounce on top/bottom walls
  if (y <= 0 || y + boxHeight >= screenHeight) {
    dy = -dy;
    box.style.background = getRandomColor();
  }

  box.style.left = x + "px";
  box.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();