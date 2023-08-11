import { Grid, Typography } from "@mui/material";
import TableHeader from "../common/TableHeader";

const StarshipDetail = ({ data }) => {
  return (
    <>
      <TableHeader title="Starship Details" />
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Typography>Name :</Typography>
          <Typography>Model : </Typography>
          <Typography>Manufacturer:</Typography>
          <Typography>Cost in credits:</Typography>
          <Typography>Length:</Typography>
          <Typography>Max atmosphering speed:</Typography>
          <Typography>Crew :</Typography>
          <Typography>Passengers : </Typography>
          <Typography>Cargo capacity:</Typography>
          <Typography>Consumables:</Typography>
          <Typography>Hyperdrive rating:</Typography>
          <Typography>MGLT:</Typography>
          <Typography>Starship class:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{data?.name}</Typography>
          <Typography>{data?.model}</Typography>
          <Typography>{data?.manufacturer}</Typography>
          <Typography>{data?.cost_in_credits}</Typography>
          <Typography>{data?.length}</Typography>
          <Typography>{data?.max_atmosphering_speed}</Typography>
          <Typography>{data?.crew}</Typography>
          <Typography>{data?.passengers}</Typography>
          <Typography>{data?.cargo_capacity}</Typography>
          <Typography>{data?.consumables}</Typography>
          <Typography>{data?.hyperdrive_rating}</Typography>
          <Typography>{data?.MGLT}</Typography>
          <Typography>{data?.starship_class}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default StarshipDetail;
