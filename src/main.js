import "./themes/default/default-theme.css";
import "./styles.css";
import "./components/header/header.js";
import "./components/decor-square-clusters/decor-square-cluster.css";

import { createCard } from "./components/card/card.js";
import { projects } from "./data/projects.js";

const projectCard = document.getElementById("projects__cards");

if (projectCard) {
  projects.forEach((project) => {
    let card = createCard(project);
    projectCard.append(card);
  });
}
