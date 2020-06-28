const burgie = document.querySelector('.burgie');
let x = 2;
let y = 4;
const speed = 2;
let flipped = true;
function handleKeyDown(event) {
  // if its not an arrow key, we dont care
  if (!event.key.includes('Arrow')) return;
  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      break;
    case 'ArrowDown':
      y += 1;
      break;
    case 'ArrowLeft':
      x -= 1;
      flipped = false;
      break;
    case 'ArrowRight':
      x += 1;
      flipped = true;
      break;
    default:
      console.log(
        'If you can read this message, congratulations on breaking the internet 👏'
      );
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
