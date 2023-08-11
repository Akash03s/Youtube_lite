import axios from "axios";

const BASE_URL = "https://youtube-search-results.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    // params: {q: 'justin+bieber'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    },
  };

  const fetchDataFromApi = async (url) => {
    //     try {
            const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    //             headers,
    //             params,
    //         });
            return data;
  };




// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// const headers = {
//     Authorization: "bearer " + TMDB_TOKEN,
// };

// export const fetchDataFromApi = async (url, params) => {
//     try {
//         const { data } = await axios.get(BASE_URL + url, {
//             headers,
//             params,
//         });
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };