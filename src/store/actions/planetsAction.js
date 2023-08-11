import axios from "axios";

export const FETCH_PLANETS_REQUEST = "FETCH_PLANETS_REQUEST";
export const FETCH_PLANETS_SUCCESS = "FETCH_PLANETS_SUCCESS";
export const FETCH_PLANETS_FAILURE = "FETCH_PLANETS_FAILURE";
export const FETCH_PLANETS_BY_ID_SUCCESS = "FETCH_PLANETS_BY_ID_SUCCESS";

export const fetchPlanetsRequest = () => {
  return {
    type: FETCH_PLANETS_REQUEST,
  };
};

export const fetchPlanetsSuccess = (planets) => {
  return {
    type: FETCH_PLANETS_SUCCESS,
    payload: planets,
  };
};

export const fetchPlanetsByIdSuccess = (planets) => {
  return {
    type: FETCH_PLANETS_BY_ID_SUCCESS,
    payload: planets,
  };
};

export const fetchPlanetsFailure = (error) => {
  return {
    type: FETCH_PLANETS_FAILURE,
    payload: error,
  };
};

export const fetchPlanets = (pageNumber) => {
  return (dispatch, getState) => {
    dispatch(fetchPlanetsRequest());
    axios
      .get(`https://swapi.dev/api/planets/?page=${pageNumber}`)
      .then((response) => {
        const planets = response.data;
        const {
          planets: { planets: currentPlanets = [] },
        } = getState();
        const results = [...currentPlanets];
        if (currentPlanets.length < 10 * pageNumber) {
          results.splice(10 * (pageNumber - 1), 0, ...planets.results);
        }
        dispatch(fetchPlanetsSuccess({ ...planets, results }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPlanetsFailure(errorMessage));
      });
  };
};

export const fetchPlanetsById = (url) => {
  return (dispatch) => {
    dispatch(fetchPlanetsRequest());
    axios
      .get(url)
      .then((response) => {
        const planets = response.data;
        dispatch(fetchPlanetsByIdSuccess(planets));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPlanetsFailure(errorMessage));
      });
  };
};
