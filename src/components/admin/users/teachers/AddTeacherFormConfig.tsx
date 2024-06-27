import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddTeacherFormValidationSchema = yup.object({
  name: yup.string().required("Precisamos do nome do(a) professor(a)"),
  email: yup.string().required("Precisamos do email do(a) professor(a)"),
  password: yup.string().required("Precisamos da senha do(a) professor(a)"),
});

export const AddTeacherFormInitialValues: Values = {
  name: "",
  email: "",
  password: "",
  role: "TEACHER",
};

export const AddTeacherFormFields: FormFieldType[] = [
  {
    id: "name",
    label: "Insira o Nome do Professor",
    placeholder: "ex.: Fulano Silva",
    required: true,
  },
  {
    id: "email",
    label: "Insira o Email do Professor",
    placeholder: "ex.: fulanosilva@gmail.com",
    required: true,
  },
  {
    id: "password",
    label: "Insira a Senha do Professor",
    placeholder: "ex.: 12345678",
    required: true,
  },
];
