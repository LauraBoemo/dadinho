import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddStudentDialog from "./AddStudentDialog";
import StudentsTable from "./StudentsTable";
import { useGetUsers } from "../../../../apis/user/useGetUsers";

export const StudentsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();
    
    const [getUsers, users, usersLoading, usersError] = useGetUsers();

    useEffect(() => {
        getUsers({ role: "STUDENT" })
    }, []);

    const rows = useMemo(() => {
    if (!searchKey || searchKey === "") return users;

    return users?.filter(({ user }: any) =>
        user.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    }, [users, searchKey]);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Alunos Cadastrados" />
                } 
                content={
                    <>
                        {!usersLoading && usersError && 
                            <DadinhoTypography textAlign="center" color="error">
                                Não foi possível carregar os alunos
                            </DadinhoTypography>
                        }
                        {usersLoading && 
                            <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                                <DadinhoLoader />
                            </DadinhoBox>
                        }
                        {!usersLoading && !usersError &&
                            <StudentsTable content={rows} />
                        }
                    </>
                }
                sideContent={
                    <ContentBoxTableSideContent 
                        onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)}
                        onButtonClick={() => setShowDialog(true)} 
                        buttonLabel="Adicionar Aluno" 
                        searchPlaceholder="Alunos" 
                    />
                }
            />
            <AddStudentDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
        </>
    );
}

export default StudentsContentTable;
