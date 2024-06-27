import { MenuItem, MenuItemProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

export interface DadinhoMenuItemProps extends MenuItemProps {
  hoverBgColor?: "primary" | "secondary" | "info" | "warning" | "error" | "success" | string;
  selectedBgColor?: "primary" | "secondary" | "info" | "warning" | "error" | "success" | string;
}
export const DadinhoMenuItem: React.FC<DadinhoMenuItemProps> = styled(
  ({ selectedBgColor, hoverBgColor, ...props }: DadinhoMenuItemProps) => <MenuItem {...props} />,
)(({ selectedBgColor, hoverBgColor, theme }) => {
  const hoverColor =
    //@ts-ignore
    (hoverBgColor && ((theme.palette[hoverBgColor] && theme.palette[hoverBgColor].light) || hoverBgColor)) ||
    //@ts-ignore
    theme.palette.common.opacityTeal;
  const selectedColor =
    (selectedBgColor &&
      //@ts-ignore
      ((theme.palette[selectedBgColor] && theme.palette[selectedBgColor].light) || selectedBgColor)) ||
    //@ts-ignore
    theme.palette.common.opacityTeal2;
  return {
    ...theme.typography.h5,
    backgroundColor: theme.palette.secondary.contrastText,
    ":hover": {
      backgroundColor: hoverColor,
    },
    ":focus": {
      backgroundColor: hoverColor,
    },
    "&.MuiMenuItem-root": {
      ...theme.typography.body1,
      minHeight: 38,
      justifyContent: "center",
      color: theme.palette.text.primary,
      "~ .MuiMenuItem-root": {
        borderTop: `1px solid ${theme.palette.grey[100]}`,
      },
      "&.Mui-selected": {
        backgroundColor: selectedColor,
      },
    },
  };
});

export default DadinhoMenuItem;
