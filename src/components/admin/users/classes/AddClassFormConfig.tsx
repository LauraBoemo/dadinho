import * as yup from "yup";
import { Values, FormFieldType } from "../../../form/FormConfig";

export const AddClassFormValidationSchema = yup.object({
  name: yup.string().required("Precisamos do name da turma"),
  grade: yup.string().required("Precisamos da série da turma"),
});

export const AddClassFormInitialValues: Values = {
  name: "",
  grade: "",
  teacherId: "",
  studentsId: "",
};

export const AddClassFormFields: FormFieldType[] = [
  {
    id: "name",
    label: "Insira o name da Turma",
    placeholder: "ex.: Turma 3",
    required: true,
  },
  {
    id: "grade",
    label: "Insira a Série da Turma",
    placeholder: "ex.: 6º Ano",
    required: true,
  },
];
