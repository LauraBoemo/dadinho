import { ClassesContentTable, DadinhoStack, StudentsContentTable, TeachersContentTable } from "../../../components";

export const UsersPage = () => {
    return (
        <DadinhoStack spacing={1} mr={2}>
            <StudentsContentTable />
            <TeachersContentTable />
            <ClassesContentTable />
        </DadinhoStack>
    );
}

export default UsersPage;