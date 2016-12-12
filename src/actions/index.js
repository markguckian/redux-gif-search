export const UPDATE_PARAM = 'UPDATE_PARAM';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_URL = 'UPDATE_URL';
export const REQUEST_GIF = 'REQUEST_GIF';
export const RECEIVE_GIF = 'RECEIVE_GIF';

export const updateParam = param => ({
  type: UPDATE_PARAM,
  param,
});

export const updateName = name => ({
  type: UPDATE_NAME,
  name,
});

export const requestGif = isFetching => ({
  type: REQUEST_GIF,
  isFetching,
});

export const receiveGif = gif => ({
  type: RECEIVE_GIF,
  gif,
});

export const fetchGif = name => (dispatch) => {
  dispatch(requestGif());
  return fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${name}`)
    .then(response => response.json())
    .then(json => dispatch(receiveGif(json.data.image_url)));
};

