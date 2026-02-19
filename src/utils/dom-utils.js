/**
 * DOM utility functions for the portfolio website
 * @module domUtils
 *
 */

/**
 * Generic helper to create DOM elements with clasess and text.
 * @param {string} tag - The HTML tag to create (e.g., 'div', 'p', 'a').
 * @param {string} [className] - An optional classname to add to the element.
 * @param {string} [text] - The text content of the element.
 * @returns {HTMLElement} The created DOM element.
 */

export function createElement({ tag, className = "", text = "" }) {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

/**
 * Creates a safe external link with security attributes.
 * @param {string} text - The text content of the link.
 * @param {string} href - The URL the link points to.
 * @param {string} [className] - An optional classname to add to the link.
 * @return {HTMLAnchorElement} The created anchor element.
 */

export function createExternalLink({ text, href, className = "" }) {
  const link = createElement({ tag: "a", className, text });
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

/**
 * Factory function top create images with built-in best praacticess
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alt text for the image.
 * @param {string} [className] - An optional classname to add to the image.
 * @returns {HTMLImageElement} The created image element.
 */

export function createImage({ src, alt, className = "" }) {
  const imageContainer = createElement({
    tag: "div",
    className: "card__image-container",
  });

  const img = createElement({ tag: "img", className });
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";

  imageContainer.append(img);

  img.onerror = () => {
    console.warn(`Image failed to load: ${src}`);
    img.style.display = "none";
  };

  return imageContainer;
}

/**
 * Creates a cluster of random of decorative squares around an element.
 * @param {HTMLElement} parent - the container to which the squares will be added.
 * @param {Object} options - Configuration options for the square cluster.
 */

export function createSquareCluster(
  parent,
  { count = 10, gridSize = 20 } = {},
) {
  for (let i = 0; i < count; i++) {
    const square = createElement({
      tag: "div",
      className: "square-cluster-decor",
    });

    // 1. Only pick Top (0), Right (1), or Left (3)
    // We skip Bottom (2) to keep the effect at the top
    const edges = [0, 1, 3];
    const edge = edges[Math.floor(Math.random() * edges.length)];

    const thickness = 8; // Tight clump range in %
    const offset = Math.random() * thickness - thickness / 2;

    let x, y;

    if (edge === 0) {
      // Top Edge
      x = Math.random() * 100;
      y = offset;
    } else if (edge === 1) {
      // Right Edge (Top Half Only)
      x = 100 + offset;
      y = Math.random() * 50; // Restricted to top 50%
    } else {
      // Left Edge (Top Half Only)
      x = offset;
      y = Math.random() * 50; // Restricted to top 50%
    }

    const size = (Math.floor(Math.random() * 2) + 1) * (gridSize / 2);

    Object.assign(square.style, {
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      transform: "translate(-50%, -50%)",
      opacity: Math.random() * 0.7 + 0.3,
    });

    parent.append(square);
  }
}
