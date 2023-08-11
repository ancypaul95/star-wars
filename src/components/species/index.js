import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Link, Typography } from "@mui/material";
import DataGridTable from "../common/DataGridTable";
import { fetchSpecies, fetchSpeciesById } from "../../store/actions/speciesActions";
import Spinner from "../common/Spinner";
import TableHeader from "../common/TableHeader";
import SpeciesDetail from "./view";

const Species = () => {
  const dispatch = useDispatch();
  const { loading, species, error, total, data } = useSelector(
    (state) => state.species
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchSpecies(pageNumber));
  }, [dispatch, pageNumber]);

  const onPageChange = (page) => {
    const pageNumber = page + 1;
    setPageNumber(pageNumber);
  };

  const handleView = (url) => {
    dispatch(fetchSpeciesById(url));
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
      field: "classification",
      headerName: "Classification",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.classification}
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
        <SpeciesDetail data={data} />
      ) : (
        <>
          <TableHeader title="Star Wars Species" />
          <DataGridTable
            rows={species}
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

export default Species;
