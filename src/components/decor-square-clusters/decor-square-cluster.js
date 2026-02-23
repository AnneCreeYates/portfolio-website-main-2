import { createElement } from "../../utils/dom-utils.js";

/**
 * Creates a cluster of random of decorative squares around an element.
 * @param {HTMLElement} parent - the container to which the squares will be added.
 * @param {Object} options - Configuration options for the square cluster.
 */

export function createSquareCluster(
  parent,
  { count = 20, gridSize = 20 } = {},
) {
  for (let i = 0; i < count; i++) {
    const square = createElement({
      tag: "div",
      className: "decor--square-cluster",
    });

    // 1. Only pick Top (0), Right (1), or Left (3)
    // skipped Bottom (2) to keep the effect at the top
    const edges = [0, 1, 3];
    const edge = edges[Math.floor(Math.random() * edges.length)];

    const thickness = 5; // Tight clump range in %
    const offset = Math.random() * thickness - thickness / 2;

    let x, y;

    if (edge === 0) {
      // Top Edge
      x = Math.random() * 100;
      y = offset;
    } else if (edge === 1) {
      // Right Edge (Top Half Only)
      x = 100 + offset;
      y = Math.random() * 170;
    } else {
      // Left Edge (Top Half Only)
      x = offset;
      y = Math.random() * 100;
    }

    const size =
      (Math.floor(Math.random() * 3) + 2) *
      (gridSize / (Math.floor(Math.random() * 3) + 4));

    // SAnitisation of the values
    const xValue = Number(x);
    const yValue = Number(y);
    const sizeValue = Number(size);

    // Specific assignement for better performance and API best practices
    square.style.left = `${xValue}%`;
    square.style.top = `${yValue}%`;
    square.style.width = `${sizeValue}px`;
    square.style.height = `${sizeValue}px`;
    square.style.transform = "translate(-50%, -50%)";
    square.style.opacity = Math.random() * 0.7 + 0.3;

    parent.append(square);
  }
}
