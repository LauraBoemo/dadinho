import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddTeacherFormValidationSchema = yup.object({
  nome: yup.string().required("Precisamos do nome da turma"),
  turma: yup.string().required("Precisamos da turma"),
});

export const AddTeacherFormInitialValues: Values = {
  nome: "",
  turma: "",
};

export const AddTeacherFormFields: FormFieldType[] = [
  {
    id: "nome",
    label: "Insira o Nome do Professor",
    placeholder: "ex.: Fulano Silva",
    required: true,
  },
  {
    id: "turma",
    label: "Selecione a turma deste professor",
    placeholder: "ex.: Turma 4",
    required: true,
  },
];
