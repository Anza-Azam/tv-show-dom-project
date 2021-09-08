// You can edit ALL of the code here
function setup() {
    const allEpisodes = getAllEpisodes();
   displayShows(allEpisodes)

}



   function displayShows(allEpisodes)

//function makePageForEpisodes(episodeList)
 {
    


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
    
    const select=document.createElement('select')
    

allEpisodes.forEach(episode=>{const option=document.createElement('option')
option.value=`${episode.name}-${episode.season.toString().padStart(3, 'S0')}${episode.number.toString().padStart(3, 'E0')}`;
option.innerText=`${episode.name}-${episode.season.toString().padStart(3, 'S0')}${episode.number.toString().padStart(3, 'E0')}`;
select.appendChild(option)
})    
 const selectContainer= document.createElement('div')
 select.classList.add('selection')
 selectContainer.classList.add('select')
 selectContainer.appendChild(select)
 
document.body.appendChild(selectContainer)
    

////////////////////////////////////////////////////////////////////////
const selectElement = document.querySelector('.selection');

selectElement.addEventListener('click', (e) => 
{

        clearInterval(timeout)
         const lists = document.querySelector('.main')
const itemsfrom = lists.getElementsByClassName('showStyles')
//console.log(itemsfrom)
Array.from(itemsfrom).forEach(elem=>{
  if(elem.firstElementChild.textContent===e.target.value)
  {
 
elem.firstElementChild.style.backgroundColor = "red";
elem.firstElementChild.id=e.target.value
}
else {elem.firstElementChild.removeAttribute('style');}
})
 
const a = document.createElement('a')
a.href=`#${e.target.value}`;
selectContainer.appendChild(a);
a.style.visibility='hidden';
a.click();
    })
 // const result = document.querySelector('.result');
 




////////////////////////////////////////












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
     allEpisodes.forEach(makePageForEpisodes);
   let timeout;
search.addEventListener('keyup',()=>{

   timeout= setInterval(()=>{
clearInterval(timeout)
let i=0,j=0;
     const lists = document.querySelector('.main')

const term=search.value.toLowerCase();
const itemsfrom = lists.getElementsByClassName('showStyles')
//console.log(itemsfrom)
Array.from(itemsfrom).forEach(elem=>{
    if(term.length===0){elem.style.display='flex'
 displayNumbers.innerText=`Displaying ${allEpisodes.length} / ${allEpisodes.length} results`
}
else
    if(!elem.firstElementChild.textContent.toLowerCase().includes(term)&&(!elem.lastElementChild.textContent.toLowerCase().includes(term))) 
    {elem.style.display='none'
    
}
    else{
        elem.style.display='flex'
        i+=1; displayNumbers.innerText=`Displaying ${i} / ${allEpisodes.length} results`
    }
})
let total=[]
Array.from(itemsfrom).forEach(elem=>{
    if(elem.style.display==='none')
    total.push(true)
    else total.push(false)})
    if (total.every(elem=>elem===true))
 displayNumbers.innerText=`Displaying ${j} / ${allEpisodes.length} results`


},500)

})

function makePageForEpisodes(episodeList)
{ const show = document.createElement('div');
     show.classList.add('showStyles'); const showHeading = document.createElement('h2'); const imgDiv = document.createElement('div'); const showImage = document.createElement('img'); const showDescription = document.createElement('p'); showHeading.classList.add('showItem'); showImage.classList.add('showItem'); showDescription.classList.add('showItem'); showHeading.innerText = `${episodeList.name}-${episodeList.season.toString().padStart(3, 'S0')}${episodeList.number.toString().padStart(3, 'E0')}`; showImage.src = episodeList.image.medium; imgDiv.appendChild(showImage); showDescription.innerText = episodeList.summary.substring(3, episodeList.summary.length - 4); show.append(showHeading, imgDiv, showDescription); main.append(show); main.appendChild(show);
     }




    // const rootElem = document.getElementById("root");
    // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

// /creating header and grid
// let root = document.getElementById("root")

// const main= document.createElement('div')