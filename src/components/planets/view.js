import { Grid, Typography } from "@mui/material";
import TableHeader from "../common/TableHeader";

const PlanetDetail = ({ data }) => {
  return (
    <>
      <TableHeader title="Planet Details" />
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Typography>Name :</Typography>
          <Typography>Rotation Period : </Typography>
          <Typography>Orbital Period:</Typography>
          <Typography>Climate:</Typography>
          <Typography>Terrain:</Typography>
          <Typography>Gravity:</Typography>
          <Typography>Surface Water:</Typography>
          <Typography>Population:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{data?.name}</Typography>
          <Typography>{data?.rotation_period}</Typography>
          <Typography>{data?.orbital_period}</Typography>
          <Typography>{data?.climate}</Typography>
          <Typography>{data?.terrain}</Typography>
          <Typography>{data?.gravity}</Typography>
          <Typography>{data?.surface_water}</Typography>
          <Typography>{data?.population}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default PlanetDetail;
