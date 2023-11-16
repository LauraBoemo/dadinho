import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoLoader = styled(CircularProgress)(({ theme }) => ({
    width: "20px !important",
    height: "20px !important",
}));

export default DadinhoLoader;
