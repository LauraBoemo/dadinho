import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoLink = styled(Link)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.info.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    ":hover": {
        cursor: "pointer",
    }
}));

export default DadinhoLink;
