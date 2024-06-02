import React from "react";
import { Dialog, DialogProps, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import DadinhoStack from "./DadinhoStack";
import DadinhoIconButton from "./DadinhoIconButton";
import DadinhoTypography from "./DadinhoTypography";

export interface DadinhoDialogProps extends DialogProps {
  title?: string;
  hasCloseIcon?: boolean;
}

const StyledTitle = styled(DadinhoTypography)(({ theme }) => ({
  ...theme.typography.h3,
  fontWeight: theme.typography.fontWeightMedium,
}));

const DialogWithTitle: React.FC<DadinhoDialogProps> = ({ title, hasCloseIcon, children, ...props }) => (
  <Dialog {...props}>
    {title && (
      <DadinhoDialogTitle sx={{ p: 3.0, pb: 1.5 }}>
        <DadinhoStack direction="row" justifyContent="space-between" alignItems="center">
          <StyledTitle>{title || ""}</StyledTitle>
          {hasCloseIcon && (
            <DadinhoIconButton
              aria-label="Close Form"
              color="primary"
              bordered={false}
              // @ts-ignore
              onClick={props.onClose}
              sx={{ p: 0.5 }}
            >
                X
            </DadinhoIconButton>
          )}
        </DadinhoStack>
      </DadinhoDialogTitle>
    )}
    {children}
  </Dialog>
);

export const DadinhoDialog = styled(DialogWithTitle)(({ theme }) => ({}));
export const DadinhoDialogTitle = styled(DialogTitle)(({ theme }) => ({
  ...theme.typography.h3,
  fontWeight: theme.typography.fontWeightBold,
}));
export const DadinhoDialogContent = styled(DialogContent)(({ theme }) => ({
  paddingLeft: theme.spacing(3.0),
  paddingRight: theme.spacing(3.0),
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(1.5),
}));
export const DadinhoDialogContentText = styled(DialogContentText)(({ theme }) => ({}));
export const DadinhoDialogActions = styled(DialogActions)(({ theme }) => ({
  paddingLeft: theme.spacing(3.0),
  paddingRight: theme.spacing(3.0),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(3.0),
  justifyContent: "center",
}));

export default DadinhoDialog;
