import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <Box className="spinner">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
