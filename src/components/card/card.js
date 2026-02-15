import { createElement, createExternalLink } from "../../utils/dom-utils.js";
import "./card.css";

export function createCard({
  title = "Untitled project",
  imgSrc,
  description = "No description available.",
  repoLink,
  livePageLink,
}) {
  const card = createElement("div", "card");

  const img = createElement("img", "card__image");
  img.src = imgSrc;
  img.alt = `Project screenshot for ${title}`;
  img.loading = "lazy";

  // Handle broken images
  img.onerror = () => {
    img.style.display = "none";
  };

  card.append(img);

  const cardContent = createElement("div", "card__content");
  card.append(cardContent);

  const h3 = createElement("h3", "card__title", title);

  const p = createElement("p", "card__description", description);

  cardContent.append(h3, p);

  // Only create the links container if at least one link is provided

  if (repoLink || livePageLink) {
    const linkContainer = createElement("div", "card__links-container");

    if (repoLink) {
      linkContainer.append(
        createExternalLink("GitHub", repoLink, "card__link"),
      );
    }
    if (livePageLink) {
      linkContainer.append(
        createExternalLink("Live Page", livePageLink, "card__link"),
      );
    }

    cardContent.append(linkContainer);
  }

  return card;
}
