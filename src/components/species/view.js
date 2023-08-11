import { Grid, Typography } from "@mui/material";
import TableHeader from "../common/TableHeader";

const SpeciesDetail = ({ data }) => {
  return (
    <>
      <TableHeader title="Species Details" />
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Typography>Name :</Typography>
          <Typography>Classification : </Typography>
          <Typography>Designation:</Typography>
          <Typography>Average Height:</Typography>
          <Typography>Skin Colors:</Typography>
          <Typography>Hair Colors:</Typography>
          <Typography>Eye Colors:</Typography>
          <Typography>Average Lifespan:</Typography>
          <Typography>Language:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{data?.name}</Typography>
          <Typography>{data?.classification}</Typography>
          <Typography>{data?.designation}</Typography>
          <Typography>{data?.average_height}</Typography>
          <Typography>{data?.skin_colors}</Typography>
          <Typography>{data?.hair_colors}</Typography>
          <Typography>{data?.eye_colors}</Typography>
          <Typography>{data?.average_lifespan}</Typography>
          <Typography>{data?.language}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default SpeciesDetail;
