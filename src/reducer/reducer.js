import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_FAIL,
  GET_RANDOM_IMAGE,
  GET_RANDOM_IMAGE_FAIL,
  GET_RANDOM_IMAGE_SUCCESS,
  GET_SUB_BREEDS,
  GET_SUB_BREEDS_FAIL,
  GET_SUB_BREEDS_SUCCESS,
  SET_SEARCH_TEXT,
  SEARCH_BREEDS
} from '../constant/actionTypes'
import { INITIAL_STATE } from '../constant/initialState';

/**
 * Reducer function for update state of the application
 */
export default function reducer(state = INITIAL_STATE, action) {
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

    // Searching 
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload.searchText }

    case SEARCH_BREEDS:
      return { ...state, breedsSearched: action.payload.searchBreeds }

    default:
      return state;
  }
}
