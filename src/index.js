import { getShowData, getEpisodeList } from "./services/tvmaze.js";

const ID = "32938";

const show = await getShowData(ID);
const seasons = await getEpisodeList(ID);

const $header = document.querySelector("header");
const $episodes = document.querySelector(".episodes");

$header.setHTMLUnsafe(`
  <img class="poster" src="${show.image}">
  <h1>${show.name}</h1>
`);

const createEpisodeHTML = (episode) =>
  `<div class="episode episode-${episode.number} rating-${Math.floor(episode.rating)}">${episode.number}</div>`;

const createSeasonHTML = (data, number) => `
  <article class="season">
    <header class="season-header">T${number}</header>
    ${data.map(createEpisodeHTML).join("")}
  </article>
`;

const list = Object.values(seasons).map((season, index) => createSeasonHTML(season, index + 1));
$episodes.setHTMLUnsafe(list.join(""));