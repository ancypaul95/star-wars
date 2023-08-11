import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Link, Typography } from "@mui/material";
import DataGridTable from "../common/DataGridTable";
import {
  fetchVehicles,
  fetchVehiclesById,
} from "../../store/actions/vehiclesActions";
import TableHeader from "../common/TableHeader";
import Spinner from "../common/Spinner";
import VehicleDetail from "./view";

const Vehicles = () => {
  const dispatch = useDispatch();
  const { loading, vehicles, error, total, data } = useSelector(
    (state) => state.vehicles
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchVehicles(pageNumber));
  }, [dispatch, pageNumber]);

  const onPageChange = (page) => {
    const pageNumber = page + 1;
    setPageNumber(pageNumber);
  };

  const handleView = (url) => {
    dispatch(fetchVehiclesById(url));
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
      field: "vehicle_class",
      headerName: "vehicle class",
      minWidth: 350,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.vehicle_class}
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
        <VehicleDetail data={data} />
      ) : (
        <>
          <TableHeader title="Star Wars Vehicles" />
          <DataGridTable
            rows={vehicles}
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

export default Vehicles;
