import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { FilmReducer } from "./reducers/filmReducer";
import { configureStore } from "@reduxjs/toolkit";
import { PeopleReducer } from "./reducers/peopleReducer";
import { PlanetReducer } from "./reducers/planetReducer";
import { SpeciesReducer } from "./reducers/speciesReducer";
import { StarshipsReducer } from "./reducers/starshipsReducer";
import { VehiclesReducer } from "./reducers/vehiclesReducer";

// Create the root reducer
const rootReducer = combineReducers({
  films: FilmReducer,
  people: PeopleReducer,
  planets: PlanetReducer,
  species: SpeciesReducer,
  starships: StarshipsReducer,
  vehicles: VehiclesReducer,
});

export const configureStoreData = () => {
  const store = configureStore({ reducer: rootReducer, middleware: [thunk] });
  return store;
};
