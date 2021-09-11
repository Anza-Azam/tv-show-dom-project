import createEpisodeCard from "./episeodecard.js";
//all Episodes
let allEpisodes = [];
//Setup
function setup() {
    allEpisodes = getAllEpisodes(); //all episodes
    makePageForEpisodes(); // initial page for all episodes
    createEpisodeCard(allEpisodes); //singe episode card for available / matched episode
    createOptions(allEpisodes); //available episodes in the selection
}

// function createEpisodeCard(allEpisodes) {
//     const episodeList = document.createElement('ul'); // Episode list
//     episodeList.classList.add('main'); //main class attached to list
//     allEpisodes.forEach((episode) => {
//         //for each episode a li card is created
//         const lI = document.createElement('li');
//         lI.className = 'episode-card';

//         const name = episode.name,         //individual episode data
//             season = episode.season,
//             number = episode.number,
//             summary = episode.summary.substring(3, episode.summary.length - 4); // removed summary tags that each episode had in summary
//         image = episode.image.medium;

//         // const nameEl = document.createElement('h2'); //heading of episode /name of episode
//         // nameEl.className = 'episode-name';


//         const formattedSeason = ('' + season).padStart(2, '0'); //type coersion
//         const formattedNumber = ('' + number).padStart(2, '0'); //type coersion
//         const episodeVersion = `S${formattedSeason}E${formattedNumber}`; //full version to present

//         const episodeVersionH2 = document.createElement('h2'); // episode heading
//         episodeVersionH2.innerText = name + ' - ' + episodeVersion;

//         const imageContainer = document.createElement('div'); // episode image
//         imageContainer.classList.add('image-container');
//         const episodeImg = document.createElement('img');
//         imageContainer.appendChild(episodeImg);
//         episodeImg.src = image;                        // image source is link to medium sized image
//         episodeImg.alt = 'show episode';

//         const episodeSummary = document.createElement('p');  //episode summary
//         episodeSummary.classList.add('summary');
//         episodeSummary.innerText = summary;

//         lI.appendChild(episodeVersionH2);
//         lI.appendChild(imageContainer);
//         lI.appendChild(episodeSummary);

//         episodeList.appendChild(lI); // appended li to ul element
//     });

//     const rootEl = document.getElementById('root');

//     // targeting root element in the DOM

//     rootEl.appendChild(episodeList);
// }

// header body and footer styling and data presentation 
function makePageForEpisodes() {
    const rootElem = document.getElementById('root'); //root div with ul

    const header = document.createElement('header');
    document.body.prepend(header);
    header.classList.add('header');

    const heading = document.createElement('h1');

    heading.innerText = 'TV Shows';
    header.appendChild(heading);

    const searchContainer = document.createElement('div');       //search input text and display
    const displayNumbers = document.createElement('p');
    displayNumbers.id = 'display';
    const search = document.createElement('input');
    const searchLabel = document.createElement('label');
    searchLabel.classList.add('label')
    searchLabel.innerText = "Search Episode";
    search.type = 'text';
    search.placeholder = 'Enter key word';

    searchContainer.classList.add('inputs');
    searchContainer.append(searchLabel, search, displayNumbers);
    document.body.insertBefore(searchContainer, rootElem);
    const selectLabel = document.createElement('label');
    selectLabel.innerText = 'Select Episode'
    selectLabel.classList.add('label')
    const select = document.createElement('select');             //select display for options of episodes available
    select.classList.add('select');
    const selectContainer = document.createElement('div');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.classList.add('button');
    button.innerText = 'Show all Episodes';
    selectContainer.append(selectLabel, select, button);

    document.body.insertBefore(selectContainer, searchContainer); //select and search appended to the body 
    selectContainer.classList.add('selection');
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const site = document.createElement('p');
    site.innerText = '@copyright';
    const link = document.createElement('a');
    link.id = 'linkTag';
    link.href = 'https://www.tvmaze.com/api#licensing';
    link.target = '_blank';
    link.innerText = 'TVMaze.com';

    document.body.appendChild(footer);
    footer.appendChild(site);

    footer.appendChild(link);
    //button event to display all episodes
    button.addEventListener('click', () => {
        const tag = document.getElementById('linkTag');
        tag.href = 'index.html';
        tag.target = '_self';
        tag.click();
    });
    searchContainer.addEventListener('input', searchList);//event listener search
    select.addEventListener('change', selectList);//event listener select 
}

// populate Episode options when episode are searched or all episodes if no search made
function createOptions(episodeList) {
    const selectOptions = document.querySelector('select');

    episodeList.forEach((episode) => {
        const option = document.createElement('option');
        option.value = `${episode.season.toString().padStart(3, 'S0')}${episode.number
            .toString()
            .padStart(3, 'E0')} - ${episode.name}`;
        option.innerText = `${episode.season.toString().padStart(3, 'S0')}${episode.number
            .toString()
            .padStart(3, 'E0')} - ${episode.name}`;
        selectOptions.appendChild(option);
    });
}
//search event listener's call back function
function searchList(e) {
    const screen = document.getElementById('root');
    const list = document.querySelector('.main');
    screen.removeChild(list);
    const displayNumbers = document.getElementById('display');
    const options = document.querySelector('.select');
    removeAllChildNodes(options);

    allEpisodes = getAllEpisodes();
    const userInput = e.target.value.toLowerCase();
    const allMatchedEpisodes = allEpisodes.filter((episode) => {
        if (episode.name.toLowerCase().includes(userInput) || episode.summary.toLowerCase().includes(userInput))
            return episode;
    });
    displayNumbers.innerText = `displaying ${allMatchedEpisodes.length} / ${allEpisodes.length}`;
    createEpisodeCard(allMatchedEpisodes);
    createOptions(allMatchedEpisodes);
}
//select event listener's call back function
function selectList(e) {
    const button = document.querySelector('.button');
    button.style.display = 'flex';
    allEpisodes = getAllEpisodes();
    const selected = allEpisodes.filter((episode) => {
        if (
            e.target.value ===
            `${episode.season.toString().padStart(3, 'S0')}${episode.number
                .toString()
                .padStart(3, 'E0')} - ${episode.name}`
        ) {
            return episode;
        }
    });

    const screen = document.getElementById('root');
    const list = document.querySelector('.main');
    screen.removeChild(list);
    createEpisodeCard(selected);
}
//remove options dynamically
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
window.onload = setup;          // on window load setup call
