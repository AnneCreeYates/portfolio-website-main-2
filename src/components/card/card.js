import "./card.css";

export function createCard() {
  const cardContainer = document.getElementById("project-card-1");

  cardContainer.innerHTML = `
    <div class="card">
      <p>Project Title</p>
    </div>
  `;
}
