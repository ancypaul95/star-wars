import axios from "axios";

export const FETCH_PEOPLE_REQUEST = "FETCH_PEOPLE_REQUEST";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";
export const FETCH_PEOPLE_BY_ID_SUCCESS = "FETCH_PEOPLE_BY_ID_SUCCESS";

export const fetchPeopleRequest = () => {
  return {
    type: FETCH_PEOPLE_REQUEST,
  };
};

export const fetchPeopleSuccess = (people) => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: people,
  };
};

export const fetchPeopleByIDSuccess = (people) => {
  return {
    type: FETCH_PEOPLE_BY_ID_SUCCESS,
    payload: people,
  };
};

export const fetchPeopleFailure = (error) => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error,
  };
};

export const fetchPeople = (pageNumber) => {
  return (dispatch, getState) => {
    dispatch(fetchPeopleRequest());
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then((response) => {
        const people = response.data;
        const {
          people: { people: currentPeople = [] },
        } = getState();
        const results = [...currentPeople];
        if (currentPeople.length < 10 * pageNumber) {
          results.splice(10 * (pageNumber - 1), 0, ...people.results);
        }
        dispatch(fetchPeopleSuccess({ ...people, results }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPeopleFailure(errorMessage));
      });
  };
};

export const fetchPeopleByID = (url) => {
  return (dispatch) => {
    dispatch(fetchPeopleRequest());
    axios
      .get(url)
      .then((response) => {
        const people = response.data;
        dispatch(fetchPeopleByIDSuccess(people));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPeopleFailure(errorMessage));
      });
  };
};
