import axios from "axios";

export const FETCH_FILMS_REQUEST = "FETCH_FILMS_REQUEST";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";
export const FETCH_FILMS_BY_ID_SUCCESS = "FETCH_FILMS_BY_ID_SUCCESS";

export const fetchFilmsRequest = () => {
  return {
    type: FETCH_FILMS_REQUEST,
  };
};

export const fetchFilmsSuccess = (films) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    payload: films,
  };
};

export const fetchFilmByIDSuccess = (films) => {
  return {
    type: FETCH_FILMS_BY_ID_SUCCESS,
    payload: films,
  };
};

export const fetchFilmsFailure = (error) => {
  return {
    type: FETCH_FILMS_FAILURE,
    payload: error,
  };
};

export const fetchFilms = (pageNumber) => {
  return (dispatch, getState) => {
    dispatch(fetchFilmsRequest());
    axios
      .get(`https://swapi.dev/api/films/?page=${pageNumber}`)
      .then((response) => {
        const films = response.data;
        const {
          films: { films: currentFilms = [] },
        } = getState();
        const results = [...currentFilms];
        if (currentFilms.length < 10 * pageNumber) {
          results.splice(10 * (pageNumber - 1), 0, ...films.results);
        }
        dispatch(fetchFilmsSuccess({ ...films, results }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFilmsFailure(errorMessage));
      });
  };
};

export const fetchFilmByID = (url) => {
  return (dispatch) => {
    dispatch(fetchFilmsRequest());
    axios
      .get(url)
      .then((response) => {
        const films = response.data;
        dispatch(fetchFilmByIDSuccess(films));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFilmsFailure(errorMessage));
      });
  };
};
