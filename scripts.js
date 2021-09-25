import getAllShows from "./shows.js";
import createShowCard from "./showcard.js";
let allAvailableShows = [];
let allCompleteShows=[];
function setup() {
  
  allAvailableShows = getAllShows(); //all shows
    makePageForShows(); // initial page for all episodes
    console.log(allAvailableShows)
    allCompleteShows=allAvailableShows.filter(shows=>shows.image!==null)
  createShowCard(allCompleteShows); //single episode card for available / matched episode
 // createOptions(allAvailableShows); //load episodes in select
  //showOptions(allAvailableShows); //load shows in select
  showOptions(allCompleteShows)
}


function showOptions(episodeList) {
  const selectOptions = document.getElementById("shows");
  episodeList = episodeList.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  });
  episodeList.forEach((episode) => {
    const option = document.createElement("option");

    option.value = `${episode.name}`;

    option.innerText = `${episode.name}`;
    selectOptions.appendChild(option);
  });
}


 function searchList(e) {
  const screen = document.getElementById("root");
   const list = document.querySelector(".main");
   document.body.removeChild(screen);
  //  const divs = document.querySelectorAll(".namediv");
  //  removeAllChild(list);
  //  const a= document.querySelectorAll('.a')
  // divs.removeChild(a);
  const displayNumbers = document.getElementById("display");
  const options = document.querySelector(".select");
  removeAllChildNodes(options);
  const userInput = e.target.value.toLowerCase();
  //let totalEpisodes = await getAllEpisodesFetched();
  allAvailableShows = getAllShows(); //all shows
  //makePageForShows(); // initial page for all episodes
  //console.log(allAvailableShows);
  // allCompleteShows = allAvailableShows.filter((shows) => shows.image !== null);
  // let completeEpisodes = allCompleteShows.filter((episode) => {
  //   if (episode.image !== null && episode.summary !== null) {
  //     return episode;
  //   }
  // });

  const allMatchedEpisodes =allCompleteShows.filter((episode) => {
    if (episode.image !== null && episode.summary !== null) {
      if (
        episode.name.toLowerCase().includes(userInput) ||
        episode.summary.toLowerCase().includes(userInput)
      )
        return episode;
    }
  });
 
  displayNumbers.innerText = `found ${allMatchedEpisodes.length} Shows`;
  createShowCard(allMatchedEpisodes);
  createOptions(allMatchedEpisodes);
 }

 function createOptions(episodeList) {
   const selectOptions = document.querySelector("select");
   const search = document.getElementById("searchBox");
   search.innerText = "";
   episodeList.forEach((episode) => {
     const option = document.createElement("option");
     option.value = episode.name
     
     option.innerText = episode.name
     
     selectOptions.appendChild(option);
   });
 }
function makePageForShows() {
    const rootElem = document.getElementById('root') //root div with ul
    const header = document.createElement('header')
    document.body.prepend(header)
    header.classList.add('header')
    const heading = document.createElement('h1')
    heading.innerText = 'TV Shows'
    header.appendChild(heading)
    const searchContainer = document.createElement('div') //search input text and display
    const displayNumbers = document.createElement('p')
    displayNumbers.id = 'display'
    const search = document.createElement('input')
    const searchLabel = document.createElement('label')
    searchLabel.classList.add('label')
    searchLabel.innerText = 'Filtering for'
    search.type = 'text'
    search.placeholder = 'Enter key word'
    search.id = 'searchBox'
    searchContainer.classList.add('inputs')
    searchContainer.append(searchLabel, search, displayNumbers)
    document.body.insertBefore(searchContainer, rootElem)
    //const selectLabel = document.createElement('label')
    //selectLabel.innerText = 'Select Episode'
    //selectLabel.classList.add('label')
  searchContainer.addEventListener('input',searchList)
    const selectLabelOptions = document.createElement('label')
    //selectLabelOptions.innerText = 'Select Show'
   // selectLabelOptions.classList.add('label')
    const select = document.createElement('select')
    //select display for options of episodes available
    const showNames = document.createElement('select')
    showNames.classList.add('select')
    showNames.id = 'shows'
    select.classList.add('select')
    const selectContainer = document.createElement('div')
    const button = document.createElement('button')
    button.style.display = 'none'
    button.classList.add('button')
    button.innerText = 'Show all Episodes'
     const footer = document.createElement("footer");
     footer.classList.add("footer");
    selectContainer.append(selectLabelOptions, showNames, button)

   // document.body.appendChild(searchContainer); //select and search appended to the body
    document.body.insertBefore(selectContainer,rootElem)
    selectContainer.classList.add('selection')
    //const footer = document.createElement('footer')
    //footer.classList.add('footer')
    const site = document.createElement('p')
    site.innerText = '@copyright'
    const link = document.createElement('a')
    link.id = 'linkTag'
    link.href = 'https://www.tvmaze.com/api#licensing'
    link.target = '_blank'
    link.innerText = 'TVMaze.com'
    //display footer
    document.body.appendChild(footer)
    footer.appendChild(site)
    footer.appendChild(link)
}




//remove options dynamically
function removeAllChildNodes (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
window.onload = setup;