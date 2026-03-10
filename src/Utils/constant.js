export const LOGO = "/ztream.png"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_API_AUTH
  }
}
export const movieApi = 'https://api.themoviedb.org/3/movie/now_playing'
export const trailerApi = 'https://api.themoviedb.org/3/movie/'
export const youtubeApi = 'https://www.youtube.com/embed/'
export const youtubeOptions = '?autoplay=1&mute=1'