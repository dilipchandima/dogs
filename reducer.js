export const GET_BREEDS = 'LOAD_BREEDS';
export const GET_BREEDS_SUCCESS = 'LOAD_BREEDS_SUCCESS';
export const GET_BREEDS_FAIL = 'LOAD_BREEDS_FAIL';

export const GET_SUB_BREEDS = 'LOAD_SUB_BREEDS';
export const GET_SUB_BREEDS_SUCCESS = 'LOAD_SUB_BREEDS_SUCCESS';
export const GET_SUB_BREEDS_FAIL = 'LOAD_SUB_BREEDS_FAIL';

export const GET_RANDOM_IMAGE = 'LOAD_IMAGE';
export const GET_RANDOM_IMAGE_SUCCESS = 'LOAD_IMAGE_SUCCESS';
export const GET_RANDOM_IMAGE_FAIL = 'LOAD_IMAGE_FAIL';

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SEARCH_BREEDS = 'SEARCH_BREEDS';

export default function reducer(state = { breeds: [], breedsSearched: [], subBreeds: [], searchText: "" }, action) {
  switch (action.type) {

    // Get Bleed types
    case GET_BREEDS:
      return { ...state, loading: true };

    case GET_BREEDS_SUCCESS:
      return { ...state, loading: false, breeds: action.payload.data.message, breedsSearched: action.payload.data.message };

    case GET_BREEDS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching data'
      };

    // Get sub bleed types
    case GET_SUB_BREEDS:
      return { ...state, loadingSubBreeds: true };

    case GET_SUB_BREEDS_SUCCESS:
      return { ...state, loadingSubBreeds: false, subBreeds: action.payload.data.message };

    case GET_SUB_BREEDS_FAIL:
      return {
        ...state,
        loadingSubBreeds: false,
        error: 'Error while fetching data'
      };

    // Get images
    case GET_RANDOM_IMAGE:
      return { ...state, loadingImg: true };

    case GET_RANDOM_IMAGE_SUCCESS:
      return { ...state, loadingImg: false, imgUrl: action.payload.data.message };

    case GET_RANDOM_IMAGE_FAIL:
      return {
        ...state,
        loadingImg: false,
        error: 'Error while fetching data'
      };

    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload.searchText }

    case SEARCH_BREEDS:
      return { ...state, breedsSearched: action.payload.searchBreeds }

    default:
      return state;
  }
}

export function listBreeds() {
  return {
    type: GET_BREEDS,
    payload: {
      request: {
        url: `/breeds/list`
      }
    }
  };
}

export function listSubBreeds(bleed) {
  return {
    type: GET_SUB_BREEDS,
    payload: {
      request: {
        url: `/breed/${bleed}/list`
      }
    }
  };
}

export function getImage(bleed) {
  return {
    type: GET_RANDOM_IMAGE,
    payload: {
      request: {
        url: `/breed/${bleed}/images/random`
      }
    }
  };
}

export function setSearchText(text) {
  return {
    type: SET_SEARCH_TEXT,
    payload: {
      searchText: `${text}`
    }
  }
}

export function searchBreeds(breeds) {
  return {
    type: SEARCH_BREEDS,
    payload: {
      searchBreeds: breeds
    }
  }
}
