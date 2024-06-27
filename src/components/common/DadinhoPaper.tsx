import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoPaper = styled(Paper)(({ theme, elevation = 1, variant }) => ({
  borderRadius: theme.spacing(0.8),
  ...(variant === "outlined" && {
    boxShadow: "none",
    border: "none",
  }),
  ...(elevation === 1 &&
    variant !== "outlined" && {
      boxShadow: `0px 0px ${theme.spacing(1)} ${theme.palette.grey[100]}, 0px 0px 0px ${theme.palette.grey[100]}`,
    }),
  ...(elevation === 2 &&
    variant !== "outlined" && {
      boxShadow: `0px 0px ${theme.spacing(0.1)} ${theme.palette.grey[100]}, 0px 0px ${theme.spacing(1.6)} ${
        theme.palette.grey[100]
      }`,
    }),
  ...(elevation === 3 &&
    variant !== "outlined" && {
      boxShadow: `0px ${theme.spacing(0.2)} ${theme.spacing(0.5)} ${theme.palette.grey[100]}, 0px 0px ${theme.spacing(
        2,
      )} ${theme.palette.grey[100]}`,
    }),
}));

export default DadinhoPaper;
