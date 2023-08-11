import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const TableHeader = ({ title }) => {
  return (
    <Box className="table-header__box">
      <h2 className="table-header__box-title-center">{title}</h2>
      <Button>
        <Link className="home__content-link" to="/">
          Back
        </Link>
      </Button>
    </Box>
  );
};

export default TableHeader;
