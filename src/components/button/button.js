import "./button.css";
import { createElement, createExternalLink } from "../../utils/dom-utils.js";

export function createButton({
  text = "Button",
  href = null,
  className = "button",
  onClick = null,
}) {
  // If the element is a link
  if (href) {
    return createExternalLink({ text, href, className });
  }

  // Otherwise, create a regular button
  const button = createElement({ tag: "button", className, text });

  if (onClick) {
    button.addEventListener("click", onClick);
  }
  return button;
}
