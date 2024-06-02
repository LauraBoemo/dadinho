import * as yup from "yup";
import { FormFieldType, Values } from "../../../form/FormConfig";

export const AddItemFormValidationSchema = yup.object({
  icon: yup.string().required("Precisamos de um ícone"),
  title: yup.string().required("Precisamos de um título"),
});

export const AddItemFormInitialValues: Values = {
  icon: "",
  title: "",
};

export const AddItemFormFields: FormFieldType[] = [
  {
    id: "icon",
    label: "Ícone",
    placeholder: "Insira o ícone (emoji) do nível",
    required: true,
  },
  {
    id: "title",
    label: "Título",
    placeholder: "Insira o título do nível",
    required: true,
  },
];