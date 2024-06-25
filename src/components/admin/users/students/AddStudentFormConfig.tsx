import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddStudentFormValidationSchema = yup.object({
  email: yup.string().required("Precisamos do nome do aluno"),
  password: yup.string().required("Precisamos da senha do aluno"),
});

export const AddStudentFormInitialValues: Values = {
  email: "",
  password: "",
  role: "USER",
};

export const AddStudentFormFields: FormFieldType[] = [
  {
    id: "email",
    label: "Insira o Email do Aluno",
    placeholder: "ex.: fulanosilva@gmail.com",
    required: true,
  },
  {
    id: "password",
    label: "Informe uma senha para o Aluno",
    placeholder: "ex.: 03531303031",
    required: true,
  },
];
