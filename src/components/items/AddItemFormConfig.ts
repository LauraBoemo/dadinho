import * as yup from "yup";
import { FormFieldType, Values } from "../form/FormConfig";

export const AddItemFormValidationSchema = yup.object({
  icon: yup.string().required("Precisamos de um ícone"),
  name: yup.string().required("Precisamos de um nome"),
});

export const AddItemFormInitialValues: Values = {
  icon: "",
  name: "",
};

export const AddItemFormFields: FormFieldType[] = [
  {
    id: "icon",
    label: "Ícone",
    placeholder: "Insira o ícone (emoji)",
    required: true,
  },
  {
    id: "name",
    label: "Nome",
    placeholder: "Insira o nome do ícone",
    required: true,
  },
];
