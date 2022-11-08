const sketchpad = document.querySelector("div.sketchpad");
// The resolution of the sketchpad (e.g: 16x16),
// MUST BE a perfect square.
const RESOLUTION = 16;
const SIDE_LENGTH = Math.sqrt(RESOLUTION);
const SIDE_LENGTH_INT = sketchpad.clientWidth;
const PIXEL_LENGTH = SIDE_LENGTH_INT / SIDE_LENGTH;

/**
 * Append a 2D array of div's to the sketchpad.
 */
function createSketchpad() {
  for (let i = 0; i < SIDE_LENGTH; i++) {
    row = createRow();
    for (let j = 0; j < SIDE_LENGTH; j++) {
      pixel = createPixel();
      row.appendChild(pixel);
    }
    sketchpad.appendChild(row);
  }
}

/**
 * Create a pixel.
 * @returns a square HTML div element
 */
function createPixel() {
  pixel = document.createElement("div");
  pixel.style.height = PIXEL_LENGTH;
  pixel.style.width = PIXEL_LENGTH;
  return pixel;
}

/**
 * Create a row to contain pixels.
 * @returns a rectangle HTML div element
 */
function createRow() {
  row = document.createElement("div");
  row.style.height = PIXEL_LENGTH;
  row.style.width = SIDE_LENGTH_INT;
  return row;
}

createSketchpad();