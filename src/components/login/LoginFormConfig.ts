import * as yup from "yup";
import { FormFieldType, Values } from "../form/FormConfig";

export const LoginFormValidationSchema = yup.object({
  email: yup.string().email("Esse email não está correto").required("Precisamos do seu email"),
  password: yup.string().required("Precisamos da sua senha"),
});

export const LoginFormInitialValues: Values = {
  email: "",
  password: "",
};

export const LoginFormFields: FormFieldType[] = [
  {
    id: "email",
    label: "Seu Email",
    placeholder: "ex.: aluno@gmail.com",
    required: true,
  },
  {
    id: "password",
    label: "Sua Senha",
    placeholder: "••••••••",
    required: true,
    type: "password",
  },
];
