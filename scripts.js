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
    searchLabel.innerText = 'Search Episode'
    search.type = 'text'
    search.placeholder = 'Enter key word'
    search.id = 'searchBox'
    searchContainer.classList.add('inputs')
    searchContainer.append(searchLabel, search, displayNumbers)
    document.body.insertBefore(searchContainer, rootElem)
    //const selectLabel = document.createElement('label')
    //selectLabel.innerText = 'Select Episode'
    //selectLabel.classList.add('label')
    const selectLabelOptions = document.createElement('label')
    selectLabelOptions.innerText = 'Select Show'
    selectLabelOptions.classList.add('label')
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
window.onload = setup;