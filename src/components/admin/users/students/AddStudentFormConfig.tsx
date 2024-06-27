import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddStudentFormValidationSchema = yup.object({
  name: yup.string().required("Precisamos do nome do(a) aluno(a)"),
  email: yup.string().required("Precisamos do email do(a) aluno(a)"),
  password: yup.string().required("Precisamos da senha do(a) aluno(a)"),
});

export const AddStudentFormInitialValues: Values = {
  name: "",
  email: "",
  password: "",
  role: "STUDENT",
};

export const AddStudentFormFields: FormFieldType[] = [
  {
    id: "name",
    label: "Insira o Nome do Aluno",
    placeholder: "ex.: Fulano Silva",
    required: true,
  },
  {
    id: "email",
    label: "Insira o Email do Aluno",
    placeholder: "ex.: fulanosilva@gmail.com",
    required: true,
  },
  {
    id: "password",
    label: "Informe uma senha para o Aluno",
    placeholder: "ex.: 12345678",
    required: true,
  },
];
