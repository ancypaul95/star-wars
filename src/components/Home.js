import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App-header">
      <Typography variant="h1" className="home__title">
        Welcome to Star Wars !!!
      </Typography>
      <div className="home__content">
        <Link className="home__content-link" to="/films">
          Films
        </Link>
        <Link className="home__content-link" to="/people">
          People
        </Link>
        <Link className="home__content-link" to="/planets">
          Planets
        </Link>
        <Link className="home__content-link" to="/species">
          Species
        </Link>
        <Link className="home__content-link" to="/starships">
          Starships
        </Link>
        <Link className="home__content-link" to="/vehicles">
          Vehicles
        </Link>
      </div>
    </div>
  );
};

export default Home;
