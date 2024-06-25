import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddStudentDialog from "./AddStudentDialog";
import StudentsTable from "./StudentsTable";
import { useGetUsers } from "../../../../apis/user/useGetUsers";

const mockedContent = [
    { name: "Rani Rani", teacher: "Laura", class: "Turma 2", serie: "6 Ano" },
    { name: "Laura Boemo", teacher: "Laura", class: "Turma 2", serie: "6 Ano" },
    { name: "Ana Clara", teacher: "Laura", class: "Turma 3", serie: "6 Ano" },
    { name: "Julia Rachi", teacher: "Murilo", class: "Turma 1", serie: "6 Ano" },
    { name: "Rafaela", teacher: "Luana", class: "Turma 4", serie: "6 Ano" },
    { name: "Malu", teacher: "Luana", class: "Turma 4", serie: "6 Ano" },
]

export const StudentsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();
    const [getUsers, users, usersLoading, usersError] = useGetUsers();

    useEffect(() => {
        getUsers({ role: "STUDENT" })
    }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return users;
      
        return users?.filter((level: { name: string; }) => 
          level.name.toLowerCase().includes(searchKey.toLowerCase())
        );
      }, [users, searchKey]);

    return (
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
                <>
                    <ContentBox 
                        title={
                            <ContentBoxTableHeader title="Alunos Cadastrados" />
                        } 
                        content={
                            <StudentsTable content={rows} />
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
             }
        </>
    );
}

export default StudentsContentTable;
