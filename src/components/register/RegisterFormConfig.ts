import * as yup from "yup";
import { FormFieldType, Values } from "../form/FormConfig";

export const RegisterFormValidationSchema = yup.object({
  email: yup.string().email("Parece que esse email não está correto").required("Precisamos do seu email"),
  password: yup.string().required("Precisamos da sua senha"),
  passwordConfirm: yup.string()
    // @ts-ignore
    .oneOf([yup.ref('password'), null], "As senhas precisam ser as mesmas")
    .required("Precisamos que confirme sua senha")
});

export const RegisterFormInitialValues: Values = {
  email: "",
  password: "",
  passwordConfirm: "",
  role: "USER",
};

export const RegisterFormFields: FormFieldType[] = [
  {
    id: "email",
    label: "Email",
    placeholder: "Digite seu email aqui...",
    required: true,
  },
  {
    id: "password",
    label: "Senha",
    placeholder: "...e a sua senha aqui...",
    required: true,
    type: "password",
  },
  {
    id: "passwordConfirm",
    label: "Confirme a senha",
    placeholder: "...e a senha de novo ;)",
    required: true,
    type: "password",
  },
];
