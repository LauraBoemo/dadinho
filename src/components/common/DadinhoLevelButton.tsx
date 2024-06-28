import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoLevelButton = styled(Button)(({ theme, disabled, color }) => ({
    fontSize: 30,
    textTransform: "none",
    padding: "5px  18px",
    borderRadius: "15px",
    border: "2px solid black",
    borderColor: theme.palette.primary.main,
    boxShadow: `5px 5px 0px ${theme.palette.primary.main}`, 
    backgroundColor: theme.palette.primary.contrastText,
    
    ...(disabled === true && {
        backgroundColor: theme.palette.secondary.light,
    }), 
    
    ...(color === "success" && {
        backgroundColor: theme.palette.secondary.main,
    }), 
}));

export default DadinhoLevelButton;
