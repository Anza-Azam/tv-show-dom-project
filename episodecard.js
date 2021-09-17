//import getAllEpisodes from "./script.js";

//let allEpisodes = [];
    
        
    

export default function createEpisodeCard(allEpisodes) {

  //  allEpisodes = await getAllEpisodes();
  const episodeList = document.createElement('ul'); // Episode list
  // console.log(allEpisodes.length);
  episodeList.classList.add('main'); //main class attached to list
  allEpisodes.forEach((episode) => {
    //for each episode a li card is created
    const lI = document.createElement('li');
    const episodeVersionH2 = document.createElement('h2'); // episode heading
    const season = episode.season, number = episode.number;
    // const summary = episode.summary.substring(3, episode.summary.length - 4);
    // const episodeSummary = document.createElement('p');  //episode summary
    //   episodeSummary.classList.add('summary');
    //   episodeSummary.innerText = summary;

      const formattedSeason = ('' + season).padStart(2, '0'); //type coersion
      const formattedNumber = ('' + number).padStart(2, '0'); //type coersion
      const episodeVersion = `S${formattedSeason}E${formattedNumber}`; //full version to present

      episodeVersionH2.innerText = name + ' - ' + episodeVersion;
    //let episodeVersionH2;
    lI.className = 'episode-card';
    if (episode.image !== null) {
      if (episode.summary !== null) {
        const name = episode.name,
          //individual episode data
          season = episode.season,
          number = episode.number,
          summary = episode.summary.substring(3, episode.summary.length - 4), // removed summary tags that each episode had in summary
          image = episode.image.medium;

     
      

        const formattedSeason = ('' + season).padStart(2, '0'); //type coersion
        const formattedNumber = ('' + number).padStart(2, '0'); //type coersion
        const episodeVersion = `S${formattedSeason}E${formattedNumber}`; //full version to present

        const episodeVersionH2 = document.createElement('h2'); // episode heading
        episodeVersionH2.innerText = name + ' - ' + episodeVersion;

        const imageContainer = document.createElement('div'); // episode image
        imageContainer.classList.add('image-container');
        const episodeImg = document.createElement('img');
        imageContainer.appendChild(episodeImg);
        episodeImg.src = image;                        // image source is link to medium sized image
        episodeImg.alt = 'show episode';

        const episodeSummary = document.createElement('p');  //episode summary
        episodeSummary.classList.add('summary');
        episodeSummary.innerText = summary;

        lI.appendChild(episodeVersionH2);
        lI.appendChild(imageContainer);
        lI.appendChild(episodeSummary);

        episodeList.appendChild(lI); // appended li to ul element
      }
    }


    else {
      lI.innerText = 'Sorry, episode Image/Summary is not available';
       episodeVersionH2.innerText = episode.name + ' - ' + episodeVersion;
      lI.appendChild(episodeVersionH2); episodeList.appendChild(lI);
      const search= document.getElementById('searchBox')
      search.disabled='true'
    }
  })

    const rootEl = document.getElementById('root');

    // targeting root element in the DOM

    rootEl.appendChild(episodeList);
}