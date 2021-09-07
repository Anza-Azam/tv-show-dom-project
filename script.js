// You can edit ALL of the code here
function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);

    let rootElem = document.createElement('div');
    rootElem.classList.add('root');
    let header = document.createElement('header');
    document.body.appendChild(header);
    const searchContainer= document.createElement('div')
    const displayNumbers=document.createElement('p')
    const search=document.createElement('input');
    search.type='text'
    search.placeholder='Enter key word'
   
    searchContainer.classList.add('inputs')
    searchContainer.append(search,displayNumbers)

    document.body.appendChild(searchContainer)
        
    document.body.appendChild(rootElem);
    header.classList.add('header');

    let heading = document.createElement('h1');

    heading.innerText = 'TV Shows';

    header.append(heading);
    let main = document.createElement('main');
    let mains= document.createElement('main');
    main.classList.add('main');
    rootElem.appendChild(main);

   
    
    let footer = document.createElement('footer');
    footer.classList.add('footer');
    let site = document.createElement('p');
    site.innerText = '@copyright';
    let link=document.createElement('a')
    link.href='https://www.tvmaze.com/api#licensing'
    link.target='_blank'
    link.innerText= 'TVMaze.com'
    let filtered=[];
   function removeAll() {
  while (rootElem.firstChild) {
  rootElem.firstChild.remove();     
}
} 
    document.body.appendChild(footer);
    footer.appendChild(site);
    footer.appendChild(link)
     allEpisodes.forEach(displayShows);
   search.addEventListener('input',()=>{
               let timeout;
clearTimeout(timeout);
    timeout = setTimeout(() => {
       removeAll();
   // RootElem.querySelectorAll('*').forEach( n => n.remove() );

filtered = allEpisodes.filter((episode) =>
    {
        if (episode.summary.toLowerCase().includes(search.value)||episode.name.toLowerCase().includes(search.value)){
//console.log(episode);
            return episode;
        }
           });



let arr=filtered.slice();
 console.log(arr.length)
// filtered.forEach(elem=>console.log(elem))
             displayNumbers.innerText=`Displaying ${arr.length}/${allEpisodes.length} Episodes`;
           


arr.forEach(shows =>{ const show = document.createElement('div');
     show.classList.add('showStyles'); const showHeading = document.createElement('h2'); const imgDiv = document.createElement('div'); const showImage = document.createElement('img'); const showDescription = document.createElement('p'); showHeading.classList.add('showItem'); showImage.classList.add('showItem'); showDescription.classList.add('showItem'); showHeading.innerText = `${shows.name}-${shows.season .toString() .padStart(3, 'S0')}${shows.number.toString().padStart(3, 'E0')}`; showImage.src = shows.image.medium; imgDiv.appendChild(showImage); showDescription.innerText = shows.summary.substring(3, shows.summary.length - 4); show.append(showHeading, imgDiv, showDescription); mains.append(show);rootElem.appendChild(mains) }
);
//rootElem.appendChild(main)
           // rootElem.appendChild(main)
  //displayNumbers.innerText=search.value;
    }, 1000);
 
})


// function displayShow(){
//     console.log('hi')}
    function displayShows(shows)
{ const show = document.createElement('div');
     show.classList.add('showStyles'); const showHeading = document.createElement('h2'); const imgDiv = document.createElement('div'); const showImage = document.createElement('img'); const showDescription = document.createElement('p'); showHeading.classList.add('showItem'); showImage.classList.add('showItem'); showDescription.classList.add('showItem'); showHeading.innerText = `${shows.name}-${shows.season .toString() .padStart(3, 'S0')}${shows.number.toString().padStart(3, 'E0')}`; showImage.src = shows.image.medium; imgDiv.appendChild(showImage); showDescription.innerText = shows.summary.substring(3, shows.summary.length - 4); show.append(showHeading, imgDiv, showDescription); main.append(show); main.appendChild(show); }



}
 





function makePageForEpisodes(episodeList) {
    ;
    // const rootElem = document.getElementById("root");
    // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

// /creating header and grid
// let root = document.getElementById("root")

// const main= document.createElement('div')
