import { TextField, StandardTextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface DadinhoTextFieldProps extends StandardTextFieldProps {
  valid?: boolean;
}

export const DadinhoTextField = styled(({ valid, ...props }: DadinhoTextFieldProps) => <TextField {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body1,
    margin: `${theme.spacing(0.5)} 0`,

    "& .MuiInputLabel-root": {
      ...theme.typography.h3,
      transform: "none",
      position: "relative",
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      
      "& .MuiInputLabel-asterisk": {
        display: "none",
      },
    },

    "& .MuiInput-root": {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.spacing(0.8),
      border: "2px solid !important",
      transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
      marginTop: theme.spacing(0.7),
      minHeight: theme.spacing(3.9),
      
      "&.Mui-focused": {
        border: `${theme.spacing(0.1)} solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.secondary.light,
      },
      
      "&.Mui-disabled": {
        backgroundColor: theme.palette.primary.light,
      },
      
      "> input": { ...theme.typography.h3 },
    },
    
    "& .MuiInput-input": {
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    },
  }),
);

export default DadinhoTextField;
