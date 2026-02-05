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
  img.src = imgSrc;
  img.alt = title;
  card.append(img);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  card.append(cardContent);

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  cardContent.append(h3, p);

  if (repoLink) {
    const repoAnchor = document.createElement("a");
    repoAnchor.textContent = "GitHub";
    repoAnchor.href = repoLink;
    cardContent.append(repoAnchor);
  }

  if (livePageLink) {
    const livePageAnchor = document.createElement("a");
    livePageAnchor.textContent = "Live Page";
    livePageAnchor.href = livePageLink;
    cardContent.append(livePageAnchor);
  }

  return card;
}
