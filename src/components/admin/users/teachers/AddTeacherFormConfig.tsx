import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddTeacherFormValidationSchema = yup.object({
  email: yup.string().required("Precisamos do email do(a) professor(a)"),
  password: yup.string().required("Precisamos da senha do(a) professor(a)"),
});

export const AddTeacherFormInitialValues: Values = {
  email: "",
  password: "",
  role: "TEACHER",
};

export const AddTeacherFormFields: FormFieldType[] = [
  {
    id: "email",
    label: "Insira o Nome do Professor",
    placeholder: "ex.: Fulano Silva",
    required: true,
  },
  {
    id: "password",
    label: "Selecione a turma deste professor",
    placeholder: "ex.: Turma 4",
    required: true,
  },
];
