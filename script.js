let allEpisodes = []

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  // console.log(allEpisodes);
  createEpisodeCard(allEpisodes)
 //let fil=allEpisodes.filter(elem=>allEpisodes.indexOf(elem)===0)
 //createEpisodeCard(fil)
}

function createEpisodeCard(allEpisodes) {
  const episodeList = document.createElement("ul")
episodeList.classList.add('main');
  allEpisodes.forEach(episode => {
    const LI = document.createElement('li')
    LI.className = "episode-card"
    
    const 
      name = episode.name,
      season = episode.season,
      number = episode.number,
      summary = episode.summary.substring(3, episode.summary.length - 4);
      image = episode.image.medium;

      const nameEl = document.createElement('h2') 
      nameEl.className = "episode-name"
     // nameEl.innerText = name

      const formattedSeason = (""+season).padStart(2, "0") //type coercsion
      const formattedNumber = (""+number).padStart(2, "0") //type coercsion
      const episodeVersion = `S${formattedSeason}E${formattedNumber}`


      const episodeVersionH3 = document.createElement('h2')
      episodeVersionH3.innerText = name + " - " + episodeVersion

      const imageContainer= document.createElement('div');
      imageContainer.classList.add('image-container')
      const episodeImg = document.createElement('img');
      imageContainer.appendChild(episodeImg)
      episodeImg.src=image;

       const episodeSummary = document.createElement('p');
       episodeSummary.classList.add('summary')
      episodeSummary.innerText=summary;
    // created h2 tag for episode name
    //S02E05 format
    // `S${season}E${number}`
    // 
    //appended episode name to li element.
   // LI.appendChild(nameEl)
    LI.appendChild(episodeVersionH3)
    LI.appendChild(imageContainer)
    LI.appendChild(episodeSummary)

    episodeList.appendChild(LI) // appended li to ul element
  }) 

  const rootEl = document.getElementById("root")
  
  // targetting root element in the DOM
  
  
  
  rootEl.appendChild(episodeList)
    
}



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
 // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
 let header = document.createElement('header');
    document.body.prepend(header);
    header.classList.add('header');

    const heading = document.createElement('h1');

    heading.innerText = 'TV Shows';
    header.appendChild(heading)

const searchContainer= document.createElement('div')
    const displayNumbers=document.createElement('p')
    const search=document.createElement('input');
    search.type='text'
    search.placeholder='Enter key word'
   
    searchContainer.classList.add('inputs')
    searchContainer.append(search,displayNumbers)

    document.body.insertBefore(searchContainer,rootElem)

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


    searchContainer.addEventListener('input',(e)=>{

   let screen= document.getElementById('root')
   let list= document.querySelector('.main')
   screen.removeChild(list);
allEpisodes = getAllEpisodes()
let userInput=e.target.value.toLowerCase();
let a= allEpisodes.filter(episode=>{if(episode.name.toLowerCase().includes(userInput)||episode.summary.toLowerCase().includes(userInput))
    return episode
    })
displayNumbers.innerText= `displaying ${a.length} / ${allEpisodes.length}`;
createEpisodeCard(a)


    })

}

window.onload = setup;
