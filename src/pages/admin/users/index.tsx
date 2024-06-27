import { ClassesContentTable, DadinhoStack, StudentsContentTable, TeachersContentTable } from "../../../components";

export const UsersPage = () => {
    return (
        <DadinhoStack spacing={1} mr={2}>
            <ClassesContentTable />
            <StudentsContentTable />
            <TeachersContentTable />
        </DadinhoStack>
    );
}

export default UsersPage;