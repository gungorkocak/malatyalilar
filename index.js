console.log("hello malatyalilar!");

const WIDTH = 300;
const MARGIN = 20;

const map = function (arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], MARGIN, i));
  }

  return result;
}

const canvas = document.querySelector("#canvas");

const character = function ({ id, src, position }, margin, index) {
  const { x, y } = position;

  return `
    <div id="${id}" class="character" style="left: ${x + (index * WIDTH) + margin}px; bottom: ${y}px">
      <img src="${src}"/>
    </div>
  `;
}

const characters = function (chars) {
  return map(chars, function (char, margin, index) {
    return character(char, margin, index);
  }).join("\n");
}

let chars = [
  { id: 'ch1', src: './characters/ch1.png', position: { x: 100, y: 100 } },
  { id: 'ch2', src: './characters/ch2.png', position: { x: 250, y: 100 } },
  { id: 'ch3', src: './characters/ch3.png', position: { x: 400, y: 100 } },
]

const updatePosition = function ({ id, src, position }) {
  return {
    id, src,
    position: { x: position.x + 10, y: position.y }
  }
}

const render = function () {
  chars = map(chars, updatePosition);

  canvas.innerHTML = characters(chars);
  window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
