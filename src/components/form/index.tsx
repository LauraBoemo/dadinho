import React, { useEffect } from "react";
import { Form as FormikForm, useFormikContext } from "formik";

import Fields from "./FormFields";
import { FormFieldType } from "./FormConfig";
import { DadinhoStack, DadinhoTypography, DadinhoButton } from "../common";

interface FormProps {
  error?: Error;
  errorText?: string;
  formFields: FormFieldType[];
  formSpacing?: number;
  submitText: string;
}

const Form: React.FC<FormProps> = ({ error, formFields, formSpacing = 1.5, submitText, errorText }) => {
  const { resetForm } = useFormikContext();

  useEffect(() => {
    if (error) {
      resetForm();
    }
  }, [error]);

  return (
    <FormikForm>
      <DadinhoStack direction="column" spacing={formSpacing}>
        <Fields fields={formFields} />
        <DadinhoStack direction="column" spacing={1} alignItems="center">
          {error && (
            <DadinhoTypography variant="h3" color="error">
              {errorText || error.message}
            </DadinhoTypography>
          )}
          <DadinhoButton fullWidth type="submit">
            {submitText}
          </DadinhoButton>
        </DadinhoStack>
      </DadinhoStack>
    </FormikForm>
  );
};

export default Form;
