import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Link, Typography } from "@mui/material";
import DataGridTable from "../common/DataGridTable";
import { fetchStarships, fetchStarshipsById } from "../../store/actions/starshipsActions";
import Spinner from "../common/Spinner";
import TableHeader from "../common/TableHeader";
import StarshipDetail from "./view";

const Starships = () => {
  const dispatch = useDispatch();
  const { loading, starships, error, total, data } = useSelector(
    (state) => state.starships
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchStarships(pageNumber));
  }, [dispatch, pageNumber]);

  const onPageChange = (page) => {
    const pageNumber = page + 1;
    setPageNumber(pageNumber);
  };

  const handleView = (url) => {
    dispatch(fetchStarshipsById(url));
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      minWidth: 200,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row?.name}
          </Typography>
        );
      },
    },
    {
      field: "model",
      headerName: "model",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.model}
          </Typography>
        );
      },
    },
    {
      field: "starship_class",
      headerName: "starship class",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.starship_class}
          </Typography>
        );
      },
    },
    {
      field: "manufacturer",
      headerName: "manufacturer",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.manufacturer}
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
      ) : Object.keys(data).length !== 0 ? (
        <StarshipDetail data={data} />
      ) : (
        <>
          <TableHeader title="Star Wars Starships" />
          <DataGridTable
            rows={starships}
            columns={columns}
            total={total}
            handleOnPageChange={onPageChange}
            page={pageNumber - 1}
          />
        </>
      )}
      {error && <div>Error: {error}</div>}
    </Grid>
  );
};

export default Starships;
