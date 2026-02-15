import {
  createElement,
  createExternalLink,
  createImage,
} from "../../utils/dom-utils.js";
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

  // Only create the links container if at least one link is provided

  if (repoLink || livePageLink) {
    const linkContainer = createElement({
      tag: "div",
      className: "card__links-container",
    });

    if (repoLink) {
      linkContainer.append(
        createExternalLink({
          text: "GitHub",
          href: repoLink,
          className: "card__link",
        }),
      );
    }
    if (livePageLink) {
      linkContainer.append(
        createExternalLink({
          text: "Live Page",
          href: livePageLink,
          className: "card__link",
        }),
      );
    }

    cardContent.append(linkContainer);
  }

  return card;
}
