import { createElement } from "../../utils/dom-utils.js";
import "./decor-circuit-board-lines.css";

export function createDecorCircuitBoardLines() {
  const container = createElement({
    tag: "div",
    className: "decor-circuit-board-lines-container",
  });

  const svg = createElement({
    tag: "svg",
    className: "decor-circuit-board-lines-svg",
    attributes: {
      viewBox: "0 0 500 100",
      fill: "none",
      "stroke-width": ".5",
      xmlns: "http://www.w3.org/2000/svg",
    },
  });

  // Top Z line
  const topZLine = createElement({
    tag: "path",
    attributes: {
      d: "M20 20 H75 L150 90 H345 L410 40 H440",
      stroke: "#66fcf1",
      "stroke-width": ".5",
    },
  });
  svg.append(topZLine);

  // Bottom Z line
  const bottomZLine = createElement({
    tag: "path",
    attributes: {
      d: "M40 70 H75 L150 20 H345 L420 90 H470",
      stroke: "#66fcf1",
      "stroke-width": ".5",
    },
  });
  svg.append(bottomZLine);

  // Blocks
  const blocks = [
    // 2 separate blocks
    { x: 60, y: 45 },
    { x: 30, y: 45 },
    // 4 blocks on the top Z line
    { x: 30, y: 15 },
    { x: 160, y: 85 },
    { x: 320, y: 85 },
    { x: 440, y: 35 },
    // 4 blocks on the bottom Z line
    { x: 30, y: 65 },
    { x: 160, y: 15 },
    { x: 320, y: 15 },
    { x: 440, y: 85 },
    // Left side blocks
    { x: 30, y: 90 },
    { x: 60, y: 90 },
    { x: 320, y: 45 },
    // Right side blocks
    { x: 440, y: 65 },
    { x: 420, y: 65 },
    { x: 160, y: 55 },
    { x: 320, y: 55 },
    { x: 440, y: 10 },
    { x: 420, y: 10 },
  ];

  blocks.forEach(({ x, y }) => {
    const rect = createElement({
      tag: "rect",
      attributes: {
        x: x.toString(),
        y: y.toString(),
        width: "10",
        height: "10",
        fill: "none",
        stroke: "#66fcf1",
        "stroke-width": ".5",
      },
    });
    svg.append(rect);
  });

  // Left side horizontal line middle
  const leftHorizontal = createElement({
    tag: "path",
    attributes: {
      d: "M20 50 H60",
      stroke: "#66fcf1",
      "stroke-width": ".5",
    },
  });
  svg.append(leftHorizontal);

  // Horizontal left z line middle
  const leftZLine = createElement({
    tag: "path",
    attributes: {
      d: "M40 95 H80 L150 50 H320",
      stroke: "#66fcf1",
      "stroke-width": ".5",
    },
  });
  svg.append(leftZLine);

  // Right side horizontal right z line middle
  const rightZLine = createElement({
    tag: "path",
    attributes: {
      d: "M170 60 H345 L410 15 H440",
      stroke: "#66fcf1",
      "stroke-width": ".5",
    },
  });
  svg.append(rightZLine);

  // Horizontal line right
  const rightHorizontal = createElement({
    tag: "path",
    attributes: {
      d: "M470 70 H430",
      stroke: "#66fcf1",
      "stroke-width": ".5",
    },
  });
  svg.append(rightHorizontal);

  container.append(svg);
  return container;
}
