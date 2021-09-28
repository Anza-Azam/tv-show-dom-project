//import episode card to render the data
import createEpisodeCard from "./episodecard.js";
//import all shows
import getAllShows from "./shows.js";

let allShowEpisodes = [];
let allEpisodes = [];
let allAvailableShows = [];
let userSelectedShow = "";

allAvailableShows = getAllShows();
//display episodes
async function getAllEpisodes() {
  let names = localStorage.getItem("showname");
  let id;
  let shows = allAvailableShows.find((show) => show.name === names);
  if (shows !== undefined) {
    id = shows.id;
  }

  const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const data = await response.json();

  let episodes = data.filter(
    (episodes) => episodes.summary !== "" && episodes.image !== null
  );
  return episodes;
}

//Setup
async function setup() {
  allEpisodes = await getAllEpisodes();
  let completeEpisodes = allEpisodes.filter((episode) => {
    if (episode.image !== null && episode.summary !== null) {
      return episode;
    }
  });

  allAvailableShows = getAllShows(); //all shows
  makePageForEpisodes(); // initial page for all episodes
  createEpisodeCard(completeEpisodes); //single episode card for available / matched episode
  createOptions(completeEpisodes); //load episodes in select
  showOptions(allAvailableShows); //load shows in select
  let show = document.getElementById("shows");
  show.click();
}

// header body and footer styling and data presentation
function makePageForEpisodes() {
  const rootElem = document.getElementById("root"); //root div with ul
  const header = document.createElement("header");
  document.body.prepend(header);
  header.classList.add("header");
  const heading = document.createElement("h1");
  heading.innerText = "TV Shows";
  header.appendChild(heading);
  const searchContainer = document.createElement("div"); //search input text and display
  const displayNumbers = document.createElement("p");
  displayNumbers.id = "display";
  const search = document.createElement("input");
  const searchLabel = document.createElement("label");
  searchLabel.classList.add("label");
  searchLabel.innerText = "Search Episode";
  search.type = "text";
  search.placeholder = "Enter key word";
  search.id = "searchBox";
  searchContainer.classList.add("inputs");
  searchContainer.append(searchLabel, search, displayNumbers);
  document.body.insertBefore(searchContainer, rootElem);
  const selectLabel = document.createElement("label");
  selectLabel.innerText = "Select Episode";
  selectLabel.classList.add("label");
  const selectLabelOptions = document.createElement("label");
  selectLabelOptions.innerText = "Select Show";
  selectLabelOptions.classList.add("label");
  const select = document.createElement("select");
  //select display for options of episodes available
  const showNames = document.createElement("select");
  showNames.classList.add("select");
  showNames.id = "shows";
  select.classList.add("select");
  const selectContainer = document.createElement("div");
  const button = document.createElement("button");
  button.style.display = "none";
  button.classList.add("button");
  button.innerText = "Show all Episodes";
  const buttonShows = document.createElement("a");
  buttonShows.classList.add("button");
  buttonShows.innerText = "Present all Shows";
  buttonShows.href = "index.html";
  buttonShows.target = "_self";
  selectContainer.append(
    selectLabel,
    select,
    selectLabelOptions,
    showNames,
    button,
    buttonShows
  );

  document.body.insertBefore(selectContainer, searchContainer); //select and search appended to the body
  selectContainer.classList.add("selection");
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const site = document.createElement("p");
  site.innerText = "@copyright";
  const link = document.createElement("a");
  link.id = "linkTag";
  link.href = "https://tvmaze.com/api#licensing";
  link.target = "_blank";
  link.innerText = "TVMaze.com";
  //display footer
  document.body.appendChild(footer);
  footer.appendChild(site);
  footer.appendChild(link);
  //button event to display all episodes
  button.addEventListener("click", async () => {
    let totalEpisodes = await getAllEpisodesFetched();
    let completeEpisodes = totalEpisodes.filter((episode) => {
      if (episode.image !== null && episode.summary !== null) {
        return episode;
      }
    });
    allShowEpisodes = completeEpisodes;

    allEpisodes = allShowEpisodes.map((episode) => episode);

    const screen = document.getElementById("root");
    const list = document.querySelector(".main");
    screen.removeChild(list);
    const display = document.getElementById("display");
    display.innerText = "";
    const options = document.querySelector(".select");
    removeAllChildNodes(options);

    createEpisodeCard(allEpisodes); //single episode card for available / matched episode
    createOptions(allEpisodes);
  });
  searchContainer.addEventListener("input", searchList); //event listener search
  select.addEventListener("click", selectList); //event listener select
  showNames.addEventListener("click", selectShows);
  showNames.addEventListener("click", selectShows);
}

// populate Episode options when episode are searched or all episodes if no search made
function createOptions(episodeList) {
  const selectOptions = document.querySelector("select");
  const search = document.getElementById("searchBox");
  search.innerText = "";
  episodeList.forEach((episode) => {
    const option = document.createElement("option");
    option.value = `${episode.season
      .toString()
      .padStart(3, "S0")}${episode.number.toString().padStart(3, "E0")} - ${
      episode.name
    }`;
    option.innerText = `${episode.season
      .toString()
      .padStart(3, "S0")}${episode.number.toString().padStart(3, "E0")} - ${
      episode.name
    }`;
    selectOptions.appendChild(option);
  });
}
//shows
function showOptions(showList) {
  const selectOptions = document.getElementById("shows");
  showList = showList.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
  showList.forEach((show) => {
    const option = document.createElement("option");

    option.value = `${show.name}`;

    option.innerText = `${show.name}`;

    selectOptions.appendChild(option);
  });
}
//search event listener's call back function

async function searchList(e) {
  const screen = document.getElementById("root");
  const list = document.querySelector(".main");
  screen.removeChild(list);
  const displayNumbers = document.getElementById("display");
  const options = document.querySelector(".select");
  removeAllChildNodes(options);
  const userInput = e.target.value.toLowerCase();
  let totalEpisodes = await getAllEpisodesFetched();
  let completeEpisodes = totalEpisodes.filter((episode) => {
    if (episode.image !== null && episode.summary !== null) {
      return episode;
    }
  });

  const allMatchedEpisodes = allEpisodes.filter((episode) => {
    if (episode.image !== null && episode.summary !== null) {
      if (
        episode.name.toLowerCase().includes(userInput) ||
        episode.summary.toLowerCase().includes(userInput)
      )
        return episode;
    }
  });
  displayNumbers.innerText = `displaying ${allMatchedEpisodes.length} / ${completeEpisodes.length} episodes`;
  createEpisodeCard(allMatchedEpisodes);
  createOptions(allMatchedEpisodes);
}
//select event listener's call back function
async function selectList(e) {
  const search = document.getElementById("searchBox");
  search.value = "";
  const button = document.querySelector(".button");
  button.style.display = "flex";

  const selected = allEpisodes.filter((episode) => {
    if (
      e.target.value ===
      `${episode.season.toString().padStart(3, "S0")}${episode.number
        .toString()
        .padStart(3, "E0")} - ${episode.name}`
    ) {
      return episode;
    }
  });

  const screen = document.getElementById("root");
  const list = document.querySelector(".main");
  screen.removeChild(list);
  createEpisodeCard(selected);
}
async function getAllEpisodesFetched() {
  let id;
  allAvailableShows = getAllShows();
  let shows = allAvailableShows.find((show) => show.name === userSelectedShow);
  if (shows !== undefined) {
    id = shows.id;
  } else {
    let names = localStorage.getItem("showname");

    let shows = allAvailableShows.find((show) => show.name === names);
    if (shows !== undefined) {
      id = shows.id;
    }
  }

  let url = `https://api.tvmaze.com/shows/${id}/episodes`;
  let res = fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log("connection Failed", error));
  return res;
}

//new show select
async function selectShows(e) {
  let chosenShowName = localStorage.getItem("chosenShow");
  if (chosenShowName) {
    userSelectedShow = chosenShowName;
    localStorage.removeItem("chosenShow");
    const showFound = document.getElementById("shows");
    const showGiven = Array.from(showFound);

    showGiven.filter((show, index) => {
      if (show.value === chosenShowName) {
        showGiven[index].setAttribute("selected", "selected");
      }
    });
  } else {
    userSelectedShow = e.target.value;
  }
  const displayNumbers = document.getElementById("display");
  displayNumbers.innerText = "";
  const inputBox = document.getElementById("searchBox");
  inputBox.value = "";

  let totalEpisodes = await getAllEpisodesFetched();
  let completeEpisodes = totalEpisodes.filter((episode) => {
    if (episode.image !== null && episode.summary !== null) {
      return episode;
    }
  });
  allShowEpisodes = completeEpisodes;
  allEpisodes = allShowEpisodes.map((episode) => episode);
  const screen = document.getElementById("root");
  const list = document.querySelector(".main");
  screen.removeChild(list);
  const options = document.querySelector(".select");
  removeAllChildNodes(options);
  createEpisodeCard(allEpisodes); //single episode card for available / matched episode
  createOptions(allEpisodes);
}

//remove options dynamically
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
window.onload = setup; // on window load setup call
