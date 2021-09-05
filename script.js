//You can edit ALL of the code here
function setup() {
	const allEpisodes = getAllEpisodes();
	makePageForEpisodes(allEpisodes);
  
	let rootElem = document.createElement('div');
  rootElem.classList.add('root')
	let header = document.createElement('header');
  document.body.appendChild(header);
  document.body.appendChild(rootElem);
	header.classList.add('header');

	
    let heading=document.createElement('h1')
 
	heading.innerText = 'TV Shows';

  header.append(heading);
  let main= document.createElement('main')
  main.classList.add('main');
  rootElem.appendChild(main)
  allEpisodes.forEach(shows=>{ const show=document.createElement('div');
  show.classList.add('showStyles')
  const showHeading=document.createElement('h2')
  const showImage=document.createElement('img')
  const showDescription=document.createElement('p')
  showHeading.classList.add('showItem')
  showImage.classList.add('showItem')
  showDescription.classList.add('showItem')
  showHeading.innerText= `${shows.name}-${shows.season}${shows.number}`
  showImage.src = shows.image.medium
  showDescription.innerText=shows.summary.substring(3,shows.summary.length-4)
  show.append(showHeading,showImage,showDescription)
  main.append(show)

  main.appendChild(show)


});
  

}

function makePageForEpisodes(episodeList) {
	// const rootElem = document.getElementById("root");
	// rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

///creating header and grid
//let root = document.getElementById("root")

//const main= document.createElement('div')
