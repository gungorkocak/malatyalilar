console.log("hello malatyalilar!");

const canvas = document.querySelector("#canvas");

const character = function ({ id, src }) {
  return `
    <div id="${id}" class="character">
      <img src="${src}"/>
    </div>
  `;
}

const ch1 = { id: 'ch1', src: './characters/ch1.png' };

canvas.innerHTML = character(ch1);