import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoIconButton = styled(Button)(({ theme, variant, size, disabled, color }) => ({
    padding: 10,
    minWidth: 0,
    fontSize: 14,
    borderRadius: 15,
    textTransform: "none",
    border: `2px solid !important`,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,

    ...(variant === "text" && {
        borderColor: "transparent !important",

        ...(color === "info" && {
            "&, &:hover": {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main,
            }
        })
    }),
    

    ...(disabled === true && {
        color: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.contrastText,
    }),
}));

export default DadinhoIconButton;
