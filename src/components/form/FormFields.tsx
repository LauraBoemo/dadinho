import React from "react";
import { Field } from "formik";
import { FormFieldType } from "./FormConfig";
import DadinhoGrid from "../DadinhoGrid";
import DadinhoInput from "../DadinhoInput";
import DadinhoStack from "../DadinhoStack";

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

export const MultiColumnFormFields = ({ fields, rowSpacing, alignItems, ...props }: MultiColumnFormFieldsProps) => {
  return (
    <DadinhoGrid container direction="column" rowSpacing={rowSpacing}>
      {/* CONTENT FIELDS */}
      {Object.entries(fields).map(([rowKey, rowFields]) => (
        <DadinhoGrid
          item
          container
          key={rowKey}
          alignItems={alignItems || "flex-start"}
          direction="row"
          columnSpacing={1.5}
        >
          {rowFields.map(
            ({
              id,
              label,
              placeholder,
              required,
              type,
              component,
              columns,
              multiline,
              rows,
              fullWidth,
              style,
              ...fieldProps
            }) => {
              return (
                <DadinhoGrid style={style} key={id} item xs={columns}>
                  <Field
                    id={id}
                    name={id}
                    label={label}
                    type={type && type}
                    placeholder={placeholder}
                    required={required}
                    multiline={multiline}
                    rows={rows}
                    component={component || DadinhoInput}
                    fullWidth={fullWidth}
                    {...fieldProps}
                    {...props}
                  />
                </DadinhoGrid>
              );
            },
          )}
        </DadinhoGrid>
      ))}
    </DadinhoGrid>
  );
};

export default FormFields;
