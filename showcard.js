//display episodes on page
//name, image, summary, genres, status, rating, and runtime
export default function createShowCard(allShows) {
   // Episode list
  const rootEl = document.createElement("div");
  rootEl.id = "root";
  //const rootEl = document.getElementById("root");

  //main class attached to list
  allShows.forEach((show) => {
   
      const showList = document.createElement("section");
       showList.classList.add("main");
    const name = show.name,
      //individual episode data
      genres = show.genres,
      status = show.status,
      summary = show.summary.substring(3, show.summary.length - 4), // removed summary tags that each episode had in summary
      image = show.image.medium,
      rating = show.rating.average,
      runtime = show.runtime;

    
    //const episodeVersion = `S${formattedSeason}E${formattedNumber}`; //full version to present

    const showName = document.createElement("a"); // episode heading
      showName.innerText = name;
      showName.href = 'index2.html';
      showName.target = "_self";
    showName.onclick = setShow();
    
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('namediv')
    showName.classList.add('a')
      nameDiv.appendChild(showName)
      const contentDiv = document.createElement('div')
      
    const imageContainer = document.createElement("div"); // episode image
    imageContainer.classList.add("image-container");
    const episodeImg = document.createElement("img");
    imageContainer.appendChild(episodeImg);
    episodeImg.src = image; // image source is link to medium sized image
    episodeImg.alt = "show episode";

      const showSummary = document.createElement("p");
      const showRating = document.createElement("p");
      const showGenres = document.createElement("p");
      const showStatus = document.createElement("p");
    const showRuntime = document.createElement("p");//episode summary
      showSummary.classList.add("summary");
      
      showSummary.innerText = summary;
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
      //showList.appendChild(nameDiv);
      showList.appendChild(imageContainer);
      showList.appendChild(showSummary);
      showInfo.appendChild(showContainer)
      // appended li to ul element
      showList.appendChild(showInfo)
      rootEl.appendChild(nameDiv)
      rootEl.appendChild(showList);
      showName.addEventListener('click', setShow);
      function setShow() {
         
        localStorage.setItem("showname",showName.innerText);
      }
  });
  
  // targeting root element in the DOM
const footer = document.querySelector(".footer");
  document.body.insertBefore(rootEl,footer)
}
