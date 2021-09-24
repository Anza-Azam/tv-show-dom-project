//display episodes on page
//name, image, summary, genres, status, rating, and runtime
export default function createShowCard(allShows) {
   // Episode list

  const rootEl = document.getElementById("root");

  //main class attached to list
  allShows.forEach((show) => {
    //for each episode a li card is created
   // const lI = document.createElement("li");

    //lI.className = "show-card";
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

    const showName = document.createElement("h2"); // episode heading
      showName.innerText = name;
      const nameDiv = document.createElement('div')
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
  });

  // targeting root element in the DOM

  
}
