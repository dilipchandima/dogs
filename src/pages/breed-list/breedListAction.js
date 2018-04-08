import {
  GET_BREEDS,
  SET_SEARCH_TEXT,
  SEARCH_BREEDS
} from '../../constant/actionTypes'

/**
 * Fetch list of Breeds from the api
 */
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

/**
 * Set search text to State
 */
export function setSearchText(text) {
  return {
    type: SET_SEARCH_TEXT,
    payload: {
      searchText: `${text}`
    }
  }
}

/**
 * Search list of Breeds from Fetched Breeds
 */
export function searchBreeds(breeds) {
  return {
    type: SEARCH_BREEDS,
    payload: {
      searchBreeds: breeds
    }
  }
}
