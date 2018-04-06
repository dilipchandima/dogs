export const GET_BLEEDS = 'LOAD_BLEEDS';
export const GET_BLEEDS_SUCCESS = 'LOAD_BLEEDS_SUCCESS';
export const GET_BLEEDS_FAIL = 'LOAD_BLEEDS_FAIL';

export default function reducer(state = { bleeds: [] }, action) {
  switch (action.type) {
    
    case GET_BLEEDS:
      return { ...state, loading: true };

    case GET_BLEEDS_SUCCESS:
      return { ...state, loading: false, bleeds: action.payload.data.message };

    case GET_BLEEDS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching data'
      };

    default:
      return state;
  }
}

export function listBleeds() {
  return {
    type: GET_BLEEDS,
    payload: {
      request: {
        url: `/breeds/list`
      }
    }
  };
}