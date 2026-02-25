import { createElement } from "../../utils/dom-utils.js";
import "./decor-circuit-board-lines.css";

export function createDecorCircuitBoardLines({
  direction,
  // color = "var(--global-color--primary)",
}) {
  const decorContainer = createElement({
    tag: "div",
    className: `decor-circuit-board-lines decor-circuit-board-lines--${direction}`,
  });
  // decorContainer.style.setProperty("--decor-circuit-board-color", color);
  return decorContainer;
}
