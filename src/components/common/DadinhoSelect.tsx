import React, { useMemo, useState } from "react";
import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import DadinhoMenuItem, { DadinhoMenuItemProps } from "./DadinhoMenuItem";
import DadinhoIconButton from "./DadinhoIconButton";

export const DadinhoSelectOption: React.FC<DadinhoMenuItemProps> = (props) => {
  return <DadinhoMenuItem {...props} />;
};

export const DadinhoSelect: React.FC<any> = styled(
  ({ centerText, showBorder, MenuProps, inputProps, ...props }: any) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    const isDisabled = useMemo(() => {
      return props.disabled || inputProps?.disabled ? props.disabled || inputProps?.disabled : expanded;
    }, []);

    return (
      <Select
        onOpen={toggleExpanded}
        onClose={toggleExpanded}
        open={isDisabled ? false : expanded}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: 1.2,
              borderRadius: 0.8,
            },
          },
          MenuListProps: {
            sx: {
              pt: 0,
              pb: 0,
            },
          },
          ...MenuProps,
        }}
        IconComponent={() => (
          <DadinhoIconButton
            color="primary"
            onClick={toggleExpanded}
            sx={{
              px: 0,
              mr: 1.5,
              opacity: 0.5,
              ":hover": { bgcolor: "transparent" },
            }}
          >
          </DadinhoIconButton>
        )}
        inputProps={inputProps}
        {...props}
      />
    );
  },
)(({ centerText, showBorder, theme }) => ({
  ...theme.typography.h5,
  borderRadius: theme.spacing(0.8),
  backgroundColor: theme.palette.primary.contrastText,
  border: `${theme.spacing(0.05)} solid ${theme.palette.grey[100]}`,
  ...(centerText && { textAlign: "center" }),
  ...(showBorder && {
    border: `${theme.spacing(0.05)} solid ${theme.palette.grey[100]}`,
    boxShadow: "none",
  }),

  "& .MuiSelect-select": {
    ...theme.typography.h5,
    padding: `${theme.spacing(0.6)} ${theme.spacing(1.5)} !important`,
    border: "none",
    minHeight: "unset !important",

    "&.Mui-disabled": {
      backgroundColor: theme.palette.grey[50],
    },
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    borderStyle: "unset !important",
  },
}));

export default DadinhoSelect;
