import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
    <Nav />
    <Banner />
    <Row 
      title="Trending Now" 
      fetchUrl={requests.fetchTrending} 
      isLargeRow={true}
    />
    <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
    <Row title="Top Rated TV shows" fetchUrl={requests.fetchTVTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
    <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
    <Row title="Science Fiction Movies" fetchUrl={requests.fetchSciFiMovies} />
    <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
    <Row title="Action & Adventure TV Shows" fetchUrl={requests.fetchActionAdventureTV} />
    <Row title="Comedy TV Shows" fetchUrl={requests.fetchComedyTV} />
    <Row title="Drama TV Shows" fetchUrl={requests.fetchDramaTV} />
    <Row title="Mystery TV Shows" fetchUrl={requests.fetchMysteryTV} />
    <Row title="Science Fiction & Fantasy TV Shows" fetchUrl={requests.fetchSciFiFantasyTV}/>
    <Row title="Animation TV Shows" fetchUrl={requests.fetchAnimationTV} />
    <Row title="Docuseries" fetchUrl={requests.fetchDocumentariesTV} />
    </div>
  );
}

export default App;
