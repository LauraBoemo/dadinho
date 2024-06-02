import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddStudentFormValidationSchema = yup.object({
  nome: yup.string().required("Precisamos do nome do aluno"),
  turma: yup.string().required("Precisamos da turma do aluno"),
});

export const AddStudentFormInitialValues: Values = {
  nome: "",
  turma: "",
};

export const AddStudentFormFields: FormFieldType[] = [
  {
    id: "nome",
    label: "Insira o Nome do Aluno",
    placeholder: "ex.: Fulano Silva",
    required: true,
  },
  {
    // TODO: Isso precisa ser um select
    id: "turma",
    label: "Selecione a Turma do Aluno",
    placeholder: "ex.: Turma 3",
    required: true,
  },
];
