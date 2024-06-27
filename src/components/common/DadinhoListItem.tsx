import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

type DadinhoListItemProps = {
  leftBorderAccentColor?: string;
  selected?: boolean;
  bordered?: boolean;
};

export const DadinhoListItem = styled(ListItem)<DadinhoListItemProps>(
  ({ theme, leftBorderAccentColor, selected, bordered }) => ({
    margin: 0,
    padding: 0,
    fontSize: `${theme.typography.h5}`,
    ...((bordered && {
      ":first-of-type": {
        borderTop: `1px solid ${theme.palette.divider}`,
      },
      borderBottom: `1px solid ${theme.palette.divider}`,
    }) ||
      {}),
    borderLeft: `${theme.spacing(0.2)} solid ${(selected && leftBorderAccentColor) || "transparent"}`,
    backgroundColor: selected ? "red" : "transparent",
  }),
);

export default DadinhoListItem;
