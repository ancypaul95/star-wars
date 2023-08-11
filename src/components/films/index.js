import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Link, Typography } from "@mui/material";
import { fetchFilmByID, fetchFilms } from "../../store/actions/filmActions";
import DataGridTable from "../common/DataGridTable";
import Spinner from "../common/Spinner";
import TableHeader from "../common/TableHeader";
import FilmDetail from "./view";

const Films = () => {
  const dispatch = useDispatch();
  const { loading, films, error, total, film } = useSelector(
    (state) => state.films
  );
  const [pageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchFilms(pageNumber));
  }, [dispatch, pageNumber]);

  const onPageChange = (page) => {
    const pageNumber = page + 1;
    dispatch(fetchFilms(pageNumber));
  };

  const handleView = (url) => {
    dispatch(fetchFilmByID(url));
  };

  const columns = [
    {
      field: "title",
      headerName: "Title",
      sortable: false,
      minWidth: 200,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row?.title}
          </Typography>
        );
      },
    },
    {
      field: "episode_id",
      headerName: "Episode Id",
      minWidth: 150,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.episode_id}
          </Typography>
        );
      },
    },
    {
      field: "director",
      headerName: "Director",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.director}
          </Typography>
        );
      },
    },
    {
      field: "producer",
      headerName: "Producer",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.producer}
          </Typography>
        );
      },
    },
    {
      field: "release_date",
      headerName: "Release Date",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.release_date}
          </Typography>
        );
      },
    },
    {
      flex: 0.15,
      minWidth: 50,
      field: "actions",
      headerName: "",
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              handleView(row.url);
            }}
          >
            View
          </Link>
        );
      },
    },
  ];

  return (
    <Grid>
      {loading ? (
        <Spinner />
      ) : Object.keys(film).length !== 0 ? (
        <FilmDetail data={film} />
      ) : (
        <>
          <TableHeader title="Star Wars Films" />
          <DataGridTable
            rows={films}
            columns={columns}
            total={total}
            handleOnPageChange={onPageChange}
          />
        </>
      )}
      {error && <div>Error: {error}</div>}
    </Grid>
  );
};

export default Films;
