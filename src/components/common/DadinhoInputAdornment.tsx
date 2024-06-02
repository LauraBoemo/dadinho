import { InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoInputAdornment = styled(InputAdornment)(({ theme }) => ({
  ...theme.typography.h4,
  backgroundColor: theme.palette.secondary.contrastText,
}));

export default DadinhoInputAdornment;
