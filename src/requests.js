const API_KEY = "7e918b747ff93174eff8890019aeab9a";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTVTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchActionAdventureTV: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchDramaTV: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchMysteryTV: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiFantasyTV: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchAnimationTV: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchDocumentariesTV: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    }

export default requests;