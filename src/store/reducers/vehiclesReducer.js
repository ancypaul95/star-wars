import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILURE,
  FETCH_VEHICLES_BY_ID_SUCCESS,
} from "../actions/vehiclesActions";

const initialState = {
  loading: false,
  vehicles: [],
  error: null,
  total: 0,
  data: {},
};

export const VehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_VEHICLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        vehicles: action.payload.results,
        total: action.payload.count,
      };
    }
    case FETCH_VEHICLES_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FETCH_VEHICLES_FAILURE: {
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
