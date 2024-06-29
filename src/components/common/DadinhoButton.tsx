import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoButton = styled(Button)(({ theme, variant, size, disabled, color }) => ({
    fontSize: 14,
    borderRadius: 10,
    textTransform: "none",
    border: `2px solid ${theme.palette.primary.main}`,

    ...(variant === "outlined" && {
        backgroundColor: theme.palette.primary.contrastText,
    }),

    ...(variant === "contained" && {
        "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.contrastText,
        }
    }),

    ...(size === "medium" && {
        padding: "8px 20px",
    }), 

    ...(size === "large" && {
        fontSize: 30,
        padding: "35px",
        lineHeight: "30px",
        borderRadius: "20px",

        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            padding: "23px",
            borderRadius: "10px",
        }
    }), 
    
    ...(disabled === true && {
        color: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.contrastText,
    }), 
    
    ...(color === "success" && {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
    }), 
}));

export default DadinhoButton;
