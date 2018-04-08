import {
  GET_SUB_BREEDS,
  GET_RANDOM_IMAGE
} from '../../constant/actionTypes'

/**
 * Fetch Sub breeds according to parameter
 * @param {*} bleed 
 */
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

/**
 * Fetch selected breeds image randomly from the api
 * @param {*} bleed 
 */
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
