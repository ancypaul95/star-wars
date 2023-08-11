import {
  FETCH_SPECIES_REQUEST,
  FETCH_SPECIES_SUCCESS,
  FETCH_SPECIES_FAILURE,
  FETCH_SPECIES_BY_ID_SUCCESS,
} from "../actions/speciesActions";

const initialState = {
  loading: false,
  species: [],
  error: null,
  total: 0,
  data: {},
};

export const SpeciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_SPECIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        species: action.payload.results,
        total: action.payload.count,
      };
    }
    case FETCH_SPECIES_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FETCH_SPECIES_FAILURE: {
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
