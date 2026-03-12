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
export const background = 'https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg'
export const Supported_Lang = [
  {identifier : "en", value : 'English'},
  {identifier : "hindi", value : 'Hindi'},
  {identifier : "spanish", value : 'Spanish'}
]