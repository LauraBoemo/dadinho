import * as yup from "yup";
import { FormFieldType, Values } from "../../form/FormConfig";

export const AddLevelFormValidationSchema = yup.object({
  icon: yup.string().required("Precisamos de um ícone"),
  title: yup.string().required("Precisamos de um título"),
});

export const AddLevelFormInitialValues: Values = {
  icon: "",
  title: "",
};

export const AddLevelFormFields: FormFieldType[] = [
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
