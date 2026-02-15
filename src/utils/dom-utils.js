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

export function createElement(tag, className = "", text = "") {
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

export function createExternalLink(text, href, className = "") {
  const link = createElement("a", className, text);
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}
