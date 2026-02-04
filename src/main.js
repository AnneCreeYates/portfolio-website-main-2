import "./styles.css";
import "./components/header/header.js";

import { createCard } from "./components/card/card.js";

const projectCard = document.getElementById("project-cards");

const card1 = createCard({
  title: "Project One",
  description: "Description here",
  repoLink: "#",
  livePageLink: "#",
});

const card2 = createCard({
  title: "Project Two",
  description: "Description here",
  repoLink: "#",
  livePageLink: "#",
});

if (projectCard) {
  projectCard.appendChild(card1);
  projectCard.appendChild(card2);
}
