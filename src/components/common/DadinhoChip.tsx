import { Chip, ChipProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoChip = styled((props: ChipProps) => (
  <Chip {...props} />
))(({ theme }) => ({
  height: "auto",
  borderRadius: theme.spacing(3),
  "&:hover": {
    cursor: "pointer"
  },
  "& .MuiChip-label": {
    ...theme.typography.body1,
    lineHeight: theme.spacing(1.5),
    padding: `${theme.spacing(0.45)} ${theme.spacing(1)}`,
  },
  "& .MuiChip-icon": {
    width: theme.spacing(1.6),
  },
  "&.MuiChip-filledDefault": {
    backgroundColor: theme.palette.primary.light,
  },
  "& .MuiChip-labelMedium": {
    padding: `${theme.spacing(0.6)} ${theme.spacing(1)}`,
  },
}));

export default DadinhoChip;
