import "./card.css";

export function createCard({ title, description, repoLink, livePageLink }) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <button><a href="${repoLink}" target="_blank">View Repo</a></button>
      <button><a href="${livePageLink}" target="_blank">Live Page</a></button>
  `;

  return card;
}
