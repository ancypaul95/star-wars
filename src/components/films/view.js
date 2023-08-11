import { Grid, Typography } from "@mui/material";
import TableHeader from "../common/TableHeader";

const FilmDetail = ({ data }) => {
  return (
    <>
      <TableHeader title="Film Details" />
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Typography>Title :</Typography>
          <Typography>Episode id : </Typography>
          <Typography>Director:</Typography>
          <Typography>Producer:</Typography>
          <Typography>Release date:</Typography>
          <Typography>Opening Crawl:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{data?.title}</Typography>
          <Typography>{data?.episode_id}</Typography>
          <Typography>{data?.director}</Typography>
          <Typography>{data?.producer}</Typography>
          <Typography>{data?.release_date}</Typography>
          <Typography>{data?.opening_crawl}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default FilmDetail;
