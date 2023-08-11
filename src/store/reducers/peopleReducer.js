import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_BY_ID_SUCCESS
} from "../actions/peopleActions";

const initialState = {
  loading: false,
  people: [],
  error: null,
  total: 0,
  data: {}
};

export const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_PEOPLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        people: action.payload.results,
        total: action.payload.count,
      };
    }
    case FETCH_PEOPLE_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case FETCH_PEOPLE_FAILURE: {
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
