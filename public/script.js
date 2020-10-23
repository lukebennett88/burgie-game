const burgie = document.querySelector('.burgie');
let x = 2;
let y = 4;
const speed = 2;
let flipped = true;
function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      y -= 1;
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      y += 1;
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      x -= 1;
      flipped = false;
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      x += 1;
      flipped = true;
      break;
    default:
  }
  burgie.setAttribute(
    'style',
    `
--x: ${x / speed}vmin;
--y: ${y / speed}vmin;
--rotate: ${flipped ? '0deg' : '180deg'};
`
  );
}

window.addEventListener('keydown', handleKeyDown);
