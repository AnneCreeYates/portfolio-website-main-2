import { createElement, createImage } from "../../utils/dom-utils.js";
import { createButton } from "../button/button.js";
import { createSquareCluster } from "../decor-square-clusters/decor-square-cluster.js";
import { createDecorCircuitBoardLines } from "../decor-circuit-board-lines/decor-circuit-board-lines.js";
import "./card.css";

export function createCard({
  title = "Untitled project",
  imgSrc,
  description = "No description available.",
  repoLink,
  livePageLink,
}) {
  const card = createElement({ tag: "div", className: "card" });

  const img = createImage({
    src: imgSrc,
    alt: `${title} screenshot`,
    className: "card__image",
  });

  card.append(img);

  createSquareCluster(img, {
    count: 20,
    gridSize: 15, // Ensure this matches your CSS background-size
  });

  const cardContent = createElement({ tag: "div", className: "card__content" });
  card.append(cardContent);

  const h3 = createElement({
    tag: "h3",
    className: "card__title",
    text: title,
  });

  const p = createElement({
    tag: "p",
    className: "card__description",
    text: description,
  });

  cardContent.append(h3, p);

  const circuitBoardDecoration = createDecorCircuitBoardLines();
  card.append(circuitBoardDecoration);

  // Only create the links container if at least one link is provided

  if (repoLink || livePageLink) {
    const linkContainer = createElement({
      tag: "div",
      className: "card__links-container",
    });

    if (repoLink) {
      linkContainer.append(
        createButton({
          text: "GitHub",
          href: repoLink,
          className: "button button-default",
        }),
      );
    }
    if (livePageLink) {
      linkContainer.append(
        createButton({
          text: "Live Page",
          href: livePageLink,
          className: "button button-default",
        }),
      );
    }

    cardContent.append(linkContainer);
  }

  return card;
}
