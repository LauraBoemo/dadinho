import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoButton = styled(Button)(({ theme, variant, size }) => ({
    fontSize: 14,
    borderRadius: 10,
    textTransform: "none",
    ...(variant === "outlined" && {
        border: `2px solid ${theme.palette.primary.main} !important`,
    }),
    ...(size === "medium" && {
        padding: "8px 20px",
    }), 
}));

export default DadinhoButton;
