import { TextField, StandardTextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface DadinhoTextFieldProps extends StandardTextFieldProps {
  valid?: boolean;
}

export const DadinhoTextField = styled(({ valid, ...props }: DadinhoTextFieldProps) => <TextField {...props} />)(
  ({ theme, valid }) => ({
    ...theme.typography.body1,
    margin: `${theme.spacing(1)} 0`,

    "& .MuiInputLabel-root": {
      ...theme.typography.h4,
      color: theme.palette.text.primary,
      transform: "none",
      position: "relative",
      "& .MuiInputLabel-asterisk": {
        color: theme.palette.error.main,
      },
    },

    "& .MuiInput-root": {
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.spacing(0.8),
      border: `${theme.spacing(0.05)} solid ${theme.palette.grey[100]}`,
      transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
      marginTop: theme.spacing(0.7),
      minHeight: theme.spacing(3.9),
      
      "&.Mui-focused": {
        border: `${theme.spacing(0.1)} solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.secondary.light,
      },
      
      "&.Mui-error": {
        border: `${theme.spacing(0.1)} solid ${theme.palette.error.main}`,
        backgroundColor: theme.palette.error.light,
      },
      
      "&.Mui-disabled": {
        backgroundColor: theme.palette.grey[50],
      },
      ...(!!valid && {
        border: `${theme.spacing(0.1)} solid ${theme.palette.success.main}`,
        backgroundColor: theme.palette.success.light,
      }),
      "> input": { ...theme.typography.h4 },
    },
    
    "& .MuiInput-input": {
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    },
  }),
);

export default DadinhoTextField;
