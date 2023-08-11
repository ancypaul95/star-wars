import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
  FETCH_FILMS_BY_ID_SUCCESS,
} from "../actions/filmActions";

const initialState = {
  loading: false,
  films: [],
  film: {},
  error: null,
  total: 0,
};

export const FilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_FILMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        films: action.payload.results,
        total: action.payload.count,
      };
    }
    case FETCH_FILMS_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        film: action.payload,
      };
    }
    case FETCH_FILMS_FAILURE: {
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
