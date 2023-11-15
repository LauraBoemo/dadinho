import React from "react";
import { styled } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DadinhoTextField, { DadinhoTextFieldProps } from "./DadinhoTextField";

const ErrorIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  ...theme.typography.h4,
}));

const ValidIcon = styled(CheckCircleOutlineOutlinedIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  ...theme.typography.h4,
}));

export interface FieldInputProps<Value> {
  /** Value of the field */
  value: Value;
  /** Name of the field */
  name: string;
  /** Multiple select? */
  multiple?: boolean;
  /** Is the field checked? */
  checked?: boolean;
  onBlur: {
    /** Classic React blur handler, keyed by input name */
    (e: React.FocusEvent<any>): void;
    /** Preact-like linkState. Will return a handleBlur function. */
    <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  onChange: {
    /** Classic React change handler, keyed by input name */
    (e: React.ChangeEvent<any>): void;
    /** Preact-like linkState. Will return a handleChange function.  */
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

export interface FieldProps<V = any> {
  field: FieldInputProps<V>;
  form: {
    values: Record<string, any>;
    errors: Record<string, string>;
    touched: Record<string, boolean>;
  };
}

export const resolvePath = (object: Record<string, any>, path: string, defaultValue?: any) =>
  path
    .split(/[\.\[\]\'\"]/)
    .filter((p) => p)
    .reduce((o, p) => (o ? o[p] : defaultValue), object);

export interface DadinhoInputProps extends DadinhoTextFieldProps, FieldProps {}

export const DadinhoInput: React.FC<DadinhoInputProps> = ({ field, form, required, InputProps = {}, ...props }) => {
  const { name } = field;
  const fieldTouched = resolvePath(form.touched, name);
  const fieldError = resolvePath(form.errors, name);
  const error = fieldTouched && Boolean(fieldError);
  const errorText = fieldTouched && fieldError;
  const valid = fieldTouched && !Boolean(fieldError);
  return (
    <DadinhoTextField
      variant="standard"
      InputLabelProps={{ required: required, shrink: true }}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="start">
            {error && <ErrorIcon />}
            {valid && <ValidIcon />}
          </InputAdornment>
        ),
        ...InputProps,
      }}
      error={error}
      helperText={<>{errorText}</>}
      {...field}
      {...props}
    />
  );
};

export default DadinhoInput;
