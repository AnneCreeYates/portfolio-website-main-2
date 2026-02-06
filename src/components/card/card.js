import "./card.css";

export function createCard({
  title,
  imgSrc,
  description,
  repoLink,
  livePageLink,
}) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card__image");
  img.src = imgSrc;
  img.alt = `Project screenshot for ${title}`;
  img.loading = "lazy";
  card.append(img);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");
  card.append(cardContent);

  const h3 = document.createElement("h3");
  h3.classList.add("card__title");
  h3.textContent = title;

  const p = document.createElement("p");
  p.classList.add("card__description");
  p.textContent = description;

  cardContent.append(h3, p);

  // Helper function for the links

  const createLink = (text, href) => {
    const a = document.createElement("a");
    a.classList.add("card__link");
    a.textContent = text;
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  };

  if (repoLink || livePageLink) {
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("card__links-container");

    if (repoLink) {
      linkContainer.append(createLink("GitHub", repoLink));
    }
    if (livePageLink) {
      linkContainer.append(createLink("Live Page", livePageLink));

      cardContent.append(linkContainer);
    }
  }

  return card;
}
