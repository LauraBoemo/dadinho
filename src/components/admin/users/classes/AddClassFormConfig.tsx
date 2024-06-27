import * as yup from "yup";
import { Values } from "../../../form/FormConfig";
import { StudentsMultiSelect } from "../common/StudentsMultiSelect";
import { TeacherSelect } from "../common/TeacherSelect";

export const AddClassFormValidationSchema = yup.object({
  name: yup.string().required("Precisamos do name da turma"),
  grade: yup.string().required("Precisamos da série da turma"),
});

export const AddClassFormInitialValues: Values = {
  name: "",
  grade: "",
  teacherId: "",
  studentsIds: [],
};

export const AddClassFormFields = [
  {
    id: "name",
    label: "Insira o name da Turma",
    placeholder: "ex.: Turma 3",
    required: true,
  },
  {
    id: "grade",
    label: "Insira a Série da Turma",
    placeholder: "ex.: 6",
    required: true,
    type: yup.number,
  },
  {
    id: "teacherId",
    label: "Selecione o Professor desta Turma",
    placeholder: "Pesquise pelo nome dos professores",
    required: true,
    component: TeacherSelect,
  },
  {
    id: "studentsIds",
    label: "Selecione os Alunos desta Turma",
    placeholder: "Pesquise pelo nome dos alunos",
    required: true,
    component: StudentsMultiSelect,
  },
];
