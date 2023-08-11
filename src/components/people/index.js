import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Link, Typography } from "@mui/material";
import DataGridTable from "../common/DataGridTable";
import {
  fetchPeople,
  fetchPeopleByID,
} from "../../store/actions/peopleActions";
import TableHeader from "../common/TableHeader";
import Spinner from "../common/Spinner";
import PeopleDetail from "./view";

const People = () => {
  const dispatch = useDispatch();
  const { loading, people, error, total, data } = useSelector(
    (state) => state.people
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchPeople(pageNumber));
  }, [dispatch, pageNumber]);

  const onPageChange = (page) => {
    const pageNumber = page + 1;
    setPageNumber(pageNumber);
  };

  const handleView = (url) => {
    dispatch(fetchPeopleByID(url));
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
      ) : Object.keys(data).length !== 0 ? (
        <PeopleDetail data={data} />
      ) : (
        <>
          <TableHeader title="Star Wars Characters" />
          <DataGridTable
            rows={people}
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

export default People;
