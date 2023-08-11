import axios from "axios";

export const FETCH_VEHICLES_REQUEST = "FETCH_VEHICLES_REQUEST";
export const FETCH_VEHICLES_SUCCESS = "FETCH_VEHICLES_SUCCESS";
export const FETCH_VEHICLES_FAILURE = "FETCH_VEHICLES_FAILURE";
export const FETCH_VEHICLES_BY_ID_SUCCESS = "FETCH_VEHICLES_BY_ID_SUCCESS";

export const fetchVehiclesRequest = () => {
  return {
    type: FETCH_VEHICLES_REQUEST,
  };
};

export const fetchVehiclesSuccess = (vehicles) => {
  return {
    type: FETCH_VEHICLES_SUCCESS,
    payload: vehicles,
  };
};

export const fetchVehiclesByIdSuccess = (vehicles) => {
  return {
    type: FETCH_VEHICLES_BY_ID_SUCCESS,
    payload: vehicles,
  };
};

export const fetchVehiclesFailure = (error) => {
  return {
    type: FETCH_VEHICLES_FAILURE,
    payload: error,
  };
};

export const fetchVehicles = (pageNumber) => {
  return (dispatch, getState) => {
    dispatch(fetchVehiclesRequest());
    axios
      .get(`https://swapi.dev/api/vehicles/?page=${pageNumber}`)
      .then((response) => {
        const vehicles = response.data;
        const {
          vehicles: { vehicles: currentVehicles = [] },
        } = getState();
        const results = [...currentVehicles];
        if (currentVehicles.length < 10 * pageNumber) {
          results.splice(10 * (pageNumber - 1), 0, ...vehicles.results);
        }
        dispatch(fetchVehiclesSuccess({ ...vehicles, results }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchVehiclesFailure(errorMessage));
      });
  };
};

export const fetchVehiclesById = (url) => {
  return (dispatch) => {
    dispatch(fetchVehiclesRequest());
    axios
      .get(url)
      .then((response) => {
        const vehicles = response.data;
        dispatch(fetchVehiclesByIdSuccess(vehicles));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchVehiclesFailure(errorMessage));
      });
  };
};
