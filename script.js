const sketchpad = document.querySelector("div.sketchpad");
const changeSizeButton = document.querySelector("button.change-size");
// The resolution of the sketchpad
let sideLengthPixels = 16;
const SIDE_LENGTH_INT = sketchpad.clientWidth;
let pixelLength = SIDE_LENGTH_INT / sideLengthPixels;

/**
 * Append a 2D array of div's to the sketchpad.
 */
function createSketchpad() {
  for (let i = 0; i < sideLengthPixels; i++) {
    row = createRow();
    for (let j = 0; j < sideLengthPixels; j++) {
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
  pixel.classList.toggle("pixel");
  pixel.style.flex = "1";
  pixel.style.border = "solid 1px";
  return pixel;
}

/**
 * Create a row to contain pixels.
 * @returns a rectangle HTML div element
 */
function createRow() {
  row = document.createElement("div");
  row.classList.toggle("row");
  row.style.flex = "1";
  row.style.display = "flex";
  return row;
}

/**
 * Clear the sketchpad.
 */
 function clearSketchpad() {
  const pixels = document.querySelectorAll(".pixel");
  const rows = document.querySelectorAll(".row");
  pixels.forEach((pixel) => {
    pixel.remove();
  });
  rows.forEach((row) => {
    row.remove();
  });
}

/**
 * Attach event listeners to all pixels on the sketchpad.
 */
function attachEventListenersToPixels() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("hovered");
    });
  });
}

/**
 * Attach event handler for the size change button.
 */
function addSizeChangeHandler() {
  changeSizeButton.addEventListener("click", () => {
    sideLengthPixels = parseInt(prompt("Enter sketchpad resolution"));
    while (
      isNaN(sideLengthPixels) ||
      sideLengthPixels > 100 ||
      sideLengthPixels < 0
    ) {
      sideLengthPixels = parseInt(
        prompt(
          "The sketchpad resolution should be between 0 and 100. Please re-enter."
        )
      );
    }
    clearSketchpad();
    createSketchpad();
    attachEventListenersToPixels();
  });
}

/**
 * Main driver function.
 */
function main() {
  createSketchpad();
  attachEventListenersToPixels();
  addSizeChangeHandler();
}

main();
