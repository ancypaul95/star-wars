import axios from "axios";

export const FETCH_SPECIES_REQUEST = "FETCH_SPECIES_REQUEST";
export const FETCH_SPECIES_SUCCESS = "FETCH_SPECIES_SUCCESS";
export const FETCH_SPECIES_FAILURE = "FETCH_SPECIES_FAILURE";
export const FETCH_SPECIES_BY_ID_SUCCESS = "FETCH_SPECIES_BY_ID_SUCCESS";

export const fetchSpeciesRequest = () => {
  return {
    type: FETCH_SPECIES_REQUEST,
  };
};

export const fetchSpeciesSuccess = (species) => {
  return {
    type: FETCH_SPECIES_SUCCESS,
    payload: species,
  };
};

export const fetchSpeciesByIdSuccess = (species) => {
  return {
    type: FETCH_SPECIES_BY_ID_SUCCESS,
    payload: species,
  };
};

export const fetchSpeciesFailure = (error) => {
  return {
    type: FETCH_SPECIES_FAILURE,
    payload: error,
  };
};

export const fetchSpecies = (pageNumber) => {
  return (dispatch, getState) => {
    dispatch(fetchSpeciesRequest());
    axios
      .get(`https://swapi.dev/api/species/?page=${pageNumber}`)
      .then((response) => {
        const species = response.data;
        const {
          species: { species: currentSpecies = [] },
        } = getState();
        const results = [...currentSpecies];
        if (currentSpecies.length < 10 * pageNumber) {
          results.splice(10 * (pageNumber - 1), 0, ...species.results);
        }
        dispatch(fetchSpeciesSuccess({ ...species, results }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchSpeciesFailure(errorMessage));
      });
  };
};

export const fetchSpeciesById = (url) => {
  return (dispatch) => {
    dispatch(fetchSpeciesRequest());
    axios
      .get(url)
      .then((response) => {
        const species = response.data;
        dispatch(fetchSpeciesByIdSuccess(species));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchSpeciesFailure(errorMessage));
      });
  };
};
