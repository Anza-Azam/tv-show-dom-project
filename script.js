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
    mains.classList.add('main');
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
     const parent = document.querySelector(".root")
    
    

 
    document.body.appendChild(footer);
    footer.appendChild(site);

    
    footer.appendChild(link)
    let arr=[]
     allEpisodes.forEach(displayShows);
   let timeout;
search.addEventListener('keyup',()=>{

   timeout= setTimeout(()=>{

let i=0;
     const lists = document.querySelector('.main')

const term=search.value.toLowerCase();
const itemsfrom = lists.getElementsByClassName('showStyles')



//console.log(itemsfrom)
Array.from(itemsfrom).forEach(elem=>{
    if(term.length===0){elem.style.display='flex'
 displayNumbers.innerText=allEpisodes.length
}
else
    if(!elem.firstElementChild.textContent.toLowerCase().includes(term)&&(!elem.lastElementChild.textContent.toLowerCase().includes(term))) 
    {elem.style.display='none'}
    else{
        i+=1; displayNumbers.innerText=i
    }
})

},500)

})
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