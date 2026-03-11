export const LOGO = "/ztream.png"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_API_AUTH
  }
}
export const movieApi = 'https://api.themoviedb.org/3/movie/now_playing'
export const popularApi = 'https://api.themoviedb.org/3/movie/popular'
export const topRatedApi = 'https://api.themoviedb.org/3/movie/top_rated'
export const upcomingApi = 'https://api.themoviedb.org/3/movie/upcoming'

export const trailerApi = 'https://api.themoviedb.org/3/movie/'
export const youtubeApi = 'https://www.youtube.com/embed/'
export const youtubeOptions = '?autoplay=1&mute=1&controls=0&loop=1'