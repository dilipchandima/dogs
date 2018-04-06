export const GET_BREEDS = 'LOAD_BREEDS';
export const GET_BREEDS_SUCCESS = 'LOAD_BREEDS_SUCCESS';
export const GET_BREEDS_FAIL = 'LOAD_BREEDS_FAIL';

export const GET_SUB_BREEDS = 'LOAD_SUB_BREEDS'
export const GET_SUB_BREEDS_SUCCESS = 'LOAD_SUB_BREEDS_SUCCESS'
export const GET_SUB_BREEDS_FAIL = 'LOAD_SUB_BREEDS_FAIL'

export default function reducer(state = { breeds: [], subBreeds: [] }, action) {
  switch (action.type) {

    // Get Bleed types
    case GET_BREEDS:
      return { ...state, loading: true };

    case GET_BREEDS_SUCCESS:
      return { ...state, loading: false, breeds: action.payload.data.message };

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
