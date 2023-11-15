import * as yup from "yup";
import { FormFieldType, Values } from "../form/FormConfig";

export const LoginFormValidationSchema = yup.object({
  email: yup.string().email("Parece que esse email não está correto").required("Precisamos do seu email"),
  password: yup.string().required("Precisamos da sua senha"),
});

export const LoginFormInitialValues: Values = {
  email: "",
  password: "",
};

export const LoginFormFields: FormFieldType[] = [
  {
    id: "email",
    label: "Email",
    placeholder: "Digite seu email aqui...",
    required: true,
  },
  {
    id: "password",
    label: "Senha",
    placeholder: "...e a sua senha aqui ;)",
    required: true,
    type: "password",
  },
];
