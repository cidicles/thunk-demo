export const REQUEST_GIFS = 'REQUEST_GIFS';
export function requestGifs() {
  return {
    type: REQUEST_GIFS,
    updating: true
  }
}

export const RECEIVE_GIFS = 'RECEIVE_GIFS'
export function receiveGifs(gifs) {
  return {
    type: RECEIVE_GIFS,
    gifs: gifs.data.children.map(child => {
      return {
        title: child.data.title,
        url: child.data.url
      }
    }),
    updating: false
  }
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestGifs())
    return fetch(`https://www.reddit.com/r/gifs.json`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveGifs(json))
      )
  }
}