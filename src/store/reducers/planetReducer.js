import {
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_BY_ID_SUCCESS,
} from "../actions/planetsAction";

const initialState = {
  loading: false,
  planets: [],
  error: null,
  total: 0,
  planet: {},
};

export const PlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_PLANETS_SUCCESS: {
      return {
        ...state,
        loading: false,
        planets: action.payload.results,
        total: action.payload.count,
      };
    }
    case FETCH_PLANETS_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        planet: action.payload,
      };
    }
    case FETCH_PLANETS_FAILURE: {
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
