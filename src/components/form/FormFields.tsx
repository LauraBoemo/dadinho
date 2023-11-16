import React from "react";
import { Field } from "formik";
import { FormFieldType } from "./FormConfig";
import { DadinhoStack, DadinhoInput } from "../common";

export interface FormFieldsProps extends Record<string, any> {
  fields: FormFieldType[];
}

const FormFields: React.FC<FormFieldsProps> = ({ fields, ...props }) => {
  return (
    <DadinhoStack direction="column" justifyContent="space-between" textAlign="left">
      {fields.map(({ id, label, placeholder, required, type, component: FormComponent, multiline, rows }) => {
        return (
          <Field
            id={id}
            key={id}
            name={id}
            label={label}
            type={type && type}
            placeholder={placeholder}
            required={required}
            component={FormComponent || DadinhoInput}
            multiline={multiline}
            rows={rows}
            {...props}
          />
        );
      })}
    </DadinhoStack>
  );
};

export interface MultiColumnFormFieldsProps extends Record<string, any> {
  fields: Record<string, FormFieldType[]>;
  rowSpacing?: number;
  alignItems?: string;
}

export default FormFields;
