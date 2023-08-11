import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuid } from 'uuid';

const DataGridTable = ({ rows, columns, total, handleOnPageChange, page }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      rowCount={total}
      disableSelectionOnClick
      disableColumnSelector
      disableColumnMenu
      getRowId={() => uuid()}
      pagination={true}
      page={page}
      pageSize={10}
      onPageChange={(pgno) => handleOnPageChange(pgno)}
      sx={{
        "& .MuiTypography-root": {
          color: "black",
          fontStyle: "normal",
          fontSize: "14px",
          fontWeight: 400,
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          textTransform: "capitalize"
        }
      }}
    />
  );
};

export default DataGridTable;
