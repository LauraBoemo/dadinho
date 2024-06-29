import { ClassesContentTable, DadinhoStack, StudentsContentTable, TeachersContentTable } from "../../../components";

export const UsersPage = () => {
    return (
        <DadinhoStack spacing={1} ml={2}>
            <ClassesContentTable />
            <StudentsContentTable />
            <TeachersContentTable />
        </DadinhoStack>
    );
}

export default UsersPage;