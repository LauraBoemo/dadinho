import React, { CSSProperties } from "react";

export interface FormFieldType {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
  component?: React.FC<Record<string, any>>;
  multiline?: boolean;
  rows?: number;
  columns?: number;
  fullWidth?: boolean;
  style?: CSSProperties;
}

export interface Values {
  [field: string]: any;
}
