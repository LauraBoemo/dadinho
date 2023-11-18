import * as yup from "yup";
import { FormFieldType, Values } from "../../form/FormConfig";

export const AddRecipeFormValidationSchema = yup.object({
  quantity: yup.number().required("Precisamos saber quantas vezes esse item é necessário"),
});

export const AddRecipeFormInitialValues: Values = {
  quantity: "",
};

export const AddRecipeFormFields: FormFieldType[] = [
  {
    id: "quantity",
    label: "Quantidade",
    placeholder: "Insira a quantidade necessária",
    required: true,
  },
];
