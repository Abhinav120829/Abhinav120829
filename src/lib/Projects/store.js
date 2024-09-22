import { readable } from "svelte/store";
export let projectsData = readable([
  {
    url: "https://torbin.vercel.app/",
    imgSrc: "./Images/rakthmanch.png",
    imgAlt: "Rakthmanch",
    title: "Rakthmanch",
    description:
      "A web platform providing real-time blood type availability from hospitals, NGOs, and blood banks within a 50km radius.",
  },
  {
    url: "https://xotictactoe.vercel.app/",
    imgSrc: "./Images/tic-tac-toe.png",
    imgAlt: "Tic-Tac-Toe",
    title: "Tic Tac Toe Game",
    description:
      "A classic HTML, CSS, and JavaScript Tic-Tac-Toe game where two players mark X or O on a 3x3 grid, aiming for three marks in a row horizontally, vertically, or diagonally to win.",
  },
]);
