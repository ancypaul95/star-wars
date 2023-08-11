import axios from "axios";

export const FETCH_STARSHIPS_REQUEST = "FETCH_STARSHIPS_REQUEST";
export const FETCH_STARSHIPS_SUCCESS = "FETCH_STARSHIPS_SUCCESS";
export const FETCH_STARSHIPS_FAILURE = "FETCH_STARSHIPS_FAILURE";
export const FETCH_STARSHIPS_BY_ID_SUCCESS = "FETCH_STARSHIPS_BY_ID_SUCCESS";

export const fetchStarshipsRequest = () => {
  return {
    type: FETCH_STARSHIPS_REQUEST,
  };
};

export const fetchStarshipsSuccess = (data) => {
  return {
    type: FETCH_STARSHIPS_SUCCESS,
    payload: data,
  };
};

export const fetchStarshipsByIdSuccess = (data) => {
  return {
    type: FETCH_STARSHIPS_BY_ID_SUCCESS,
    payload: data,
  };
};

export const fetchStarshipsFailure = (error) => {
  return {
    type: FETCH_STARSHIPS_FAILURE,
    payload: error,
  };
};

export const fetchStarships = (pageNumber) => {
  return (dispatch, getState) => {
    dispatch(fetchStarshipsRequest());
    axios
      .get(`https://swapi.dev/api/starships/?page=${pageNumber}`)
      .then((response) => {
        const starships = response.data;
        const {
          starships: { starships: currentStarships = [] },
        } = getState();
        const results = [...currentStarships];
        if (currentStarships.length < 10 * pageNumber) {
          results.splice(10 * (pageNumber - 1), 0, ...starships.results);
        }
        dispatch(fetchStarshipsSuccess({ ...starships, results }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchStarshipsFailure(errorMessage));
      });
  };
};

export const fetchStarshipsById = (url) => {
  return (dispatch) => {
    dispatch(fetchStarshipsRequest());
    axios
      .get(url)
      .then((response) => {
        const starships = response.data;
        dispatch(fetchStarshipsByIdSuccess(starships));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchStarshipsFailure(errorMessage));
      });
  };
};
