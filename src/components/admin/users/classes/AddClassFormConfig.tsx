import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddClassFormValidationSchema = yup.object({
  nome: yup.string().required("Precisamos do nome da turma"),
  serie: yup.string().required("Precisamos da série da turma"),
});

export const AddClassFormInitialValues: Values = {
  nome: "",
  serie: "",
};

export const AddClassFormFields: FormFieldType[] = [
  {
    id: "nome",
    label: "Insira o Nome da Turma",
    placeholder: "ex.: Turma 3",
    required: true,
  },
  {
    id: "serie",
    label: "Insira a Série da Turma",
    placeholder: "ex.: 6º Ano",
    required: true,
  },
];
