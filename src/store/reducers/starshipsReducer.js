import {
  FETCH_STARSHIPS_REQUEST,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_BY_ID_SUCCESS,
} from "../actions/starshipsActions";

const initialState = {
  loading: false,
  starships: [],
  error: null,
  total: 0,
  data: {},
};

export const StarshipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_STARSHIPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        starships: action.payload.results,
        total: action.payload.count,
      };
    }
    case FETCH_STARSHIPS_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FETCH_STARSHIPS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
