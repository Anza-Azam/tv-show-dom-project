//function that would display episodes on page
export default function createEpisodeCard(allEpisodes) {
  const episodeList = document.createElement("ul"); // Episode list
  episodeList.classList.add("main"); //main class attached to list
  allEpisodes.forEach((episode) => {
    //for each episode a li card is created
    const lI = document.createElement("li");
    lI.className = "episode-card";
    const name = episode.name,
      //individual episode data
      season = episode.season,
      number = episode.number,
      summary = episode.summary, // removed summary tags that each episode had in summary
      image = episode.image.medium;

    const formattedSeason = ("" + season).padStart(2, "0"); //type coersion
    const formattedNumber = ("" + number).padStart(2, "0"); //type coersion
    const episodeVersion = `S${formattedSeason}E${formattedNumber}`; //full version to present

    const episodeVersionH2 = document.createElement("h2"); // episode heading
    episodeVersionH2.innerText = name + " - " + episodeVersion;

    const imageContainer = document.createElement("div"); // episode image
    imageContainer.classList.add("image-container");
    const episodeImg = document.createElement("img");
    imageContainer.appendChild(episodeImg);
    episodeImg.src = image; // image source is link to medium sized image
    episodeImg.alt = "show episode";

    const episodeSummary = document.createElement("p"); //episode summary
    episodeSummary.classList.add("summary");
    episodeSummary.innerHTML = summary;
    //to check if the episode is complete to display with all image,summary and name
    if (episodeSummary.innerHTML === "") { episodeSummary.innerHTML='Episode summary is empty'}
      lI.appendChild(episodeVersionH2);
      lI.appendChild(imageContainer);
      lI.appendChild(episodeSummary);
      episodeList.appendChild(lI);
     // appended li to ul element
  });
  const rootEl = document.getElementById("root");
  // targeting root element in the DOM
  rootEl.appendChild(episodeList);
}
