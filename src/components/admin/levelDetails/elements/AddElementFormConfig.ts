import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddElementFormValidationSchema = yup.object({
  quantity: yup.number().required("Precisamos saber quantas vezes esse item é necessário"),
});

export const AddElementFormInitialValues: Values = {
  quantity: "",
};

export const AddElementFormFields: FormFieldType[] = [
  {
    id: "quantity",
    label: "Insira a Quantidade",
    placeholder: "Insira a quantidade necessária",
    required: true,
  },
];
