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
    const button=document.createElement('button')

allEpisodes.forEach(episode=>{const option=document.createElement('option')
option.value=`${episode.name}-${episode.season.toString().padStart(3, 'S0')}${episode.number.toString().padStart(3, 'E0')}`;
option.innerText=`${episode.name}-${episode.season.toString().padStart(3, 'S0')}${episode.number.toString().padStart(3, 'E0')}`;
select.appendChild(option)
})    
 const selectContainer= document.createElement('div')
 select.classList.add('selection')
 selectContainer.classList.add('select') 
 button.style.display='none'
 selectContainer.append(select,button)
 
document.body.appendChild(selectContainer)
    

////////////////////////////////////////////////////////////////////////
const selectElement = document.querySelector('.selection');

selectElement.addEventListener('click', (e) => 
{
    search.removeEventListener('keyup',m)
         const lists = document.querySelector('.main')
const itemsfrom = lists.getElementsByClassName('showStyles')

Array.from(itemsfrom).forEach(elem=>{
  if(elem.firstElementChild.textContent===e.target.value)
  {
 
elem.firstElementChild.style.backgroundColor = "red";
elem.firstElementChild.id=e.target.value
button.style.display='flex'
elem.style.display='flex'

}
else {elem.firstElementChild.removeAttribute('style');
elem.style.display='none'
}
})
 
const a = document.createElement('a')
a.href=`#${e.target.value}`;
selectContainer.appendChild(a);
a.style.visibility='hidden';
a.click();
    })
 // const result = document.querySelector('.result');
 

button.addEventListener('click',()=>{
   // displayShows(allEpisodes);
   const tag= document.getElementById('linkTag')
   tag.href='index.html'
   tag.target='_blank'
   tag.click();
    console.log('a');
})


////////////////////////////////////////












document.body.appendChild(rootElem);
    header.classList.add('header');

    const heading = document.createElement('h1');

    heading.innerText = 'TV Shows';

    header.append(heading);
    const main = document.createElement('main');
    const mains= document.createElement('main');
    main.classList.add('main');
    mains.classList.add('main');
    rootElem.appendChild(main);

   





    
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const site = document.createElement('p');
    site.innerText = '@copyright';
    const link=document.createElement('a')
    link.id='linkTag'
    link.href='https://www.tvmaze.com/api#licensing'
    link.target='_blank'
    link.innerText= 'TVMaze.com'
   
     
    


 
    document.body.appendChild(footer);
    footer.appendChild(site);

    
    footer.appendChild(link)
  
     allEpisodes.forEach(makePageForEpisodes);
   let timeout;
search.addEventListener('keyup',m)
function m(){

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

}

function makePageForEpisodes(episodeList)
{ const show = document.createElement('div');
     show.classList.add('showStyles'); const showHeading = document.createElement('h2'); const imgDiv = document.createElement('div'); const showImage = document.createElement('img'); const showDescription = document.createElement('p'); showHeading.classList.add('showItem'); showImage.classList.add('showItem'); showDescription.classList.add('showItem'); showHeading.innerText = `${episodeList.name}-${episodeList.season.toString().padStart(3, 'S0')}${episodeList.number.toString().padStart(3, 'E0')}`; showImage.src = episodeList.image.medium; imgDiv.appendChild(showImage); showDescription.innerText = episodeList.summary.substring(3, episodeList.summary.length - 4); show.append(showHeading, imgDiv, showDescription); main.append(show); main.appendChild(show);
     }


}

window.onload = setup;
