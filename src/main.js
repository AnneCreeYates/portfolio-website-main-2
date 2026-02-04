import "./styles.css";
import "./components/header/header.js";

import { createCard } from "./components/card/card.js";
import { projects } from "./data/projects.js";

const projectCard = document.getElementById("project-cards");

if (projectCard) {
  projects.forEach((project) => {
    let card = createCard(project);
    projectCard.appendChild(card);
  });
}
