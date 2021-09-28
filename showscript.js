//importing shows and createShowCard from other modules
import getAllShows from "./shows.js";
import createShowCard from "./showcard.js";

//all available shows and complete shows i.e without null data
let allAvailableShows = [];
let allCompleteShows = [];

//setup
function setup() {
  allAvailableShows = getAllShows(); //all shows
  makePageForShows(); // initial page for all shows
  allCompleteShows = allAvailableShows.filter(
    (shows) => shows.image !== null && shows.summary !== null
  );
  //show display
  createShowCard(allCompleteShows);
  //dropdown of complete shows
  showOptions(allCompleteShows);
}
//function to display dropdown in alphabetical order
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
//function for searching shows
function searchList(e) {
  const screen = document.getElementById("root");
  const list = document.querySelector(".main");
  document.body.removeChild(screen);
  const displayNumbers = document.getElementById("display");
  const options = document.querySelector(".select");
  removeAllChildNodes(options);
  const userInput = e.target.value.toLowerCase();
  allAvailableShows = getAllShows(); //all shows

  const allMatchedShows = allCompleteShows.filter((shows) => {
    let searchedItems = shows.genres.filter(
      (show) => show.toLowerCase() === userInput
    );
    if (shows.image !== null && shows.summary !== null) {
      if (
        shows.name.toLowerCase().includes(userInput) ||
        shows.summary.toLowerCase().includes(userInput) ||
        searchedItems.length > 0
      ) {
        return shows;
      }
    }
  });

  displayNumbers.innerText = `found ${allMatchedShows.length} Shows`;
  createShowCard(allMatchedShows);
  createOptions(allMatchedShows);
}
//create dropdown for searched shows
function createOptions(showList) {
  const selectOptions = document.querySelector("select");
  const search = document.getElementById("searchBox");
  search.innerText = "";
  showList.forEach((show) => {
    const option = document.createElement("option");
    option.innerHTML = show.name;
    option.value = show.name;
    selectOptions.appendChild(option);
  });
}

//make initial page for display
function makePageForShows() {
  const rootElem = document.getElementById("root"); //root div with ul
  const header = document.createElement("header");
  document.body.prepend(header);
  header.classList.add("header");
  const heading = document.createElement("h1");
  heading.innerText = "TV Shows";
  const img = document.createElement("img");
  img.src = "favicon.ico";
  img.classList.add("img");
  img.alt = "tv logo";
  header.append(img, heading);
  const searchContainer = document.createElement("div"); //search input text and display
  const displayNumbers = document.createElement("p");
  displayNumbers.id = "display";
  const search = document.createElement("input");
  const searchLabel = document.createElement("label");
  searchLabel.classList.add("label");
  searchLabel.innerText = "Filtering for";
  search.type = "text";
  search.placeholder = "Enter key word";
  search.id = "searchBox";
  searchContainer.classList.add("inputs");
  searchContainer.append(searchLabel, search, displayNumbers);
  document.body.insertBefore(searchContainer, rootElem);

  searchContainer.addEventListener("input", searchList);
  const selectLabelOptions = document.createElement("label");

  const select = document.createElement("select");

  const showNames = document.createElement("select");
  showNames.classList.add("select");
  showNames.id = "shows";
  select.classList.add("select");
  const selectContainer = document.createElement("div");
  selectContainer.id = "sel";

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  selectContainer.append(selectLabelOptions, showNames);

  document.body.insertBefore(selectContainer, rootElem);
  showNames.addEventListener("click", setShow);
  selectContainer.classList.add("selection");

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
}

//remove options dynamically
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//function to switch from show listing to episode listing
function setShow(e) {
  const showName = document.createElement("a");
  showName.display = "none";
  const sel = document.getElementById("sel");
  sel.appendChild(showName);
  showName.href = "episodeindex.html";
  showName.target = "_self";

  localStorage.setItem("chosenShow", e.target.value);
  localStorage.setItem("showname", e.target.value);
  showName.click();
}

window.onload = setup;
