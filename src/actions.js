import axios from 'axios'
const API_KEY = 'AIzaSyD18Y1hpcDa1bFBPSo42Tc19xJlrOxshP4'

export function changeMain(thumbnails, video){
  let thumbs = [...thumbnails.slice(0, thumbnails.indexOf(video)), ...thumbnails.slice(thumbnails.indexOf(video) + 1, thumbnails.length)]
  return {type: 'CHANGE_MAIN', payload: {mainVideo: video, thumbnails: thumbs}}
}

export function fetchVideos(searchTerm) {
  return function (dispatch) {
     dispatch(requestVideos(searchTerm))
      return (axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`))
      .then(result =>{dispatch(receiveVideos(result.data.items))})
  }
}

export function requestVideos(searchTerm) {
  return {type: "FETCH_VIDEOS", payload: []}
}

export function receiveVideos(data) {
  return {type: "RECEIVE_VIDEOS", payload: data}
}

// export function fetchVideos(searchTerm){
//   const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`)
//     .then((result) =>
//         resultFunction(result)
//     )
// }
