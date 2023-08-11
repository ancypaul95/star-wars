import { Grid, Typography } from "@mui/material";
import TableHeader from "../common/TableHeader";

const PeopleDetail = ({ data }) => {
  return (
    <>
      <TableHeader title="People Details" />
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Typography>Name :</Typography>
          <Typography>Height : </Typography>
          <Typography>Mass:</Typography>
          <Typography>Hair Color:</Typography>
          <Typography>Skin Color:</Typography>
          <Typography>Eye Color:</Typography>
          <Typography>Birth Year:</Typography>
          <Typography>Gender:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{data?.name}</Typography>
          <Typography>{data?.height}</Typography>
          <Typography>{data?.mass}</Typography>
          <Typography>{data?.hair_color}</Typography>
          <Typography>{data?.skin_color}</Typography>
          <Typography>{data?.eye_color}</Typography>
          <Typography>{data?.birth_year}</Typography>
          <Typography>{data?.gender}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default PeopleDetail;
