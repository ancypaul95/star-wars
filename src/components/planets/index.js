import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Link, Typography } from "@mui/material";
import DataGridTable from "../common/DataGridTable";
import { fetchPlanets, fetchPlanetsById } from "../../store/actions/planetsAction";
import Spinner from "../common/Spinner";
import TableHeader from "../common/TableHeader";
import PlanetDetail from "./view";

const Planets = () => {
  const dispatch = useDispatch();
  const { loading, planets, error, total, planet } = useSelector(
    (state) => state.planets
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchPlanets(pageNumber));
  }, [dispatch, pageNumber]);

  const onPageChange = (page) => {
    const pageNumber = page + 1;
    setPageNumber(pageNumber);
  };

  const handleView = (url) => {
    dispatch(fetchPlanetsById(url));
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      sortable: false,
      minWidth: 400,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row?.name}
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
      ) : Object.keys(planet).length !== 0 ? (
        <PlanetDetail data={planet} />
      ) : (
        <>
          <TableHeader title="Star Wars Planets" />
          <DataGridTable
            rows={planets}
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

export default Planets;
