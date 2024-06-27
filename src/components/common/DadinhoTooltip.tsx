import React from "react";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DadinhoTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(0.5),
    boxShadow: `0px ${theme.spacing(0.1)} ${theme.spacing(0.7)} ${theme.palette.grey[100]}`,
    ...theme.typography.body1,
  },
}));

export default DadinhoTooltip;
