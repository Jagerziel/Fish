import axios from 'axios'

let apiUrl;

const apiUrls = {
    production: "https://projecttwoapi-production.up.railway.app/api/fish",
    development: "https://projecttwoapi-production.up.railway.app/api/fish"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api
