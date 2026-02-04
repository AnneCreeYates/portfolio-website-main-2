import "./card.css";

export function createCard({ title, description, repoLink, livePageLink }) {
  const card = document.createElement("div");
  card.classList.add("card");

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  card.append(h3, p);

  if (repoLink) {
    const repoAnchor = document.createElement("a");
    repoAnchor.textContent = "GitHub";
    repoAnchor.href = repoLink;
    card.append(repoAnchor);
  }

  if (livePageLink) {
    const livePageAnchor = document.createElement("a");
    livePageAnchor.textContent = "Live Page";
    livePageAnchor.href = livePageLink;
    card.append(livePageAnchor);
  }

  return card;
}
