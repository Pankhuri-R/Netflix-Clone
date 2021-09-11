import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance

// https://api.themoviedb.org/3/movie/550?api_key=7b2dc6807bbe8f7ea9fd61210a3a4c58