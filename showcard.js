//display shows on page
//name, image, summary, genres, status, rating, and runtime

export default function createShowCard(allShows) {
  //show list
  const rootEl = document.createElement("div");
  rootEl.id = "root";
  
  allShows.forEach((show) => {
   
      const showList = document.createElement("section");
       showList.classList.add("main");
    const name = show.name,
      //individual show data
      genres = show.genres,
      status = show.status,
      summary = show.summary,
      image = show.image.medium,
      rating = show.rating.average,
      runtime = show.runtime;

    
 

    const showName = document.createElement("h2"); // show heading
      showName.innerText = name;
    
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('namediv')
    
  
     nameDiv.appendChild(showName)
      const contentDiv = document.createElement('div')
      
    const imageContainer = document.createElement("div"); // show image
    imageContainer.classList.add("image-container");
    const showImg = document.createElement("img");
 
    showImg.src = image; // image source is link to medium sized image
    showImg.alt = "show episode";
   imageContainer.appendChild(showImg);
      const showSummary = document.createElement("p");
      const showRating = document.createElement("p");
      const showGenres = document.createElement("p");
      const showStatus = document.createElement("p");
    const showRuntime = document.createElement("p");
      showSummary.classList.add("summary");
      
      showSummary.innerHTML = summary;
      showRating.innerText = `Rated: ${rating}`;
      showGenres.innerText = `Genres: ${genres}`;
      showStatus.innerText = `Status: ${status}`;
      showRuntime.innerText = `Runtime: ${runtime}`;
    const showInfo = document.createElement("ul");
      const showContainer = document.createElement('li')
      
  showContainer.appendChild(showRating);
      showContainer.appendChild(showGenres);
      
       showContainer.appendChild(showStatus);
       
       showContainer.appendChild(showRuntime);
      
      showList.appendChild(imageContainer);
      showList.appendChild(showSummary);
      showInfo.appendChild(showContainer)
      
      showList.appendChild(showInfo)
      rootEl.appendChild(nameDiv)
      rootEl.appendChild(showList);
    
     
  });
  
  // targeting root element in the DOM
const footer = document.querySelector(".footer");
  document.body.insertBefore(rootEl,footer)
}
