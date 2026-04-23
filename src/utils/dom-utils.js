/**
 * DOM utility functions for the portfolio website
 * @module domUtils
 *
 */

/**
 * Generic helper to create DOM elements with classes, text, and attributes.
 * @param {string} tag - The HTML tag to create (e.g., 'div', 'p', 'a').
 * @param {string} [className] - An optional classname to add to the element.
 * @param {string} [text] - The text content of the element.
 * @param {object} [attributes] - An optional object of attributes to set on the element.
 * @returns {HTMLElement} The created DOM element.
 */

export function createElement({
  tag,
  className = "",
  text = "",
  attributes = {},
}) {
  // SVG tags that need to be created in the SVG namespace
  const svgTags = [
    "svg",
    "path",
    "rect",
    "circle",
    "line",
    "polygon",
    "polyline",
    "ellipse",
    "g",
    "text",
    "tspan",
    "defs",
    "use",
    "image",
    "foreignObject",
  ];

  // Create SVG or HTML elements appropriately
  const element = svgTags.includes(tag)
    ? document.createElementNS("http://www.w3.org/2000/svg", tag)
    : document.createElement(tag);

  if (className) {
    // Split by space and filter out any empty strings to avoid adding empty class names - this allows for multiple classes to be added if provided as a space-separated string (used Boolean to check for truthy value, so it will work with empty strings, null, or undefined)
    const classes = className.split(" ").filter(Boolean);
    element.classList.add(...classes);
  }

  if (text) {
    element.textContent = text;
  }

  // Set attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
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
