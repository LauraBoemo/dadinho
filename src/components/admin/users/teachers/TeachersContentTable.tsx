import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddTeacherDialog from "./AddTeacherDialog";
import TeachersTable from "./TeachersTable";
import { useGetUsers } from "../../../../apis/user/useGetUsers";

const mockedContent = [
    { name: "Laura", assignedClass: "Turma 2" },
    { name: "Murilo", assignedClass: "Turma 3" },
    { name: "Luana", assignedClass: "Turma 1" },
    { name: "Flávio", assignedClass: "Turma 4" },
]

export const TeachersContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();
    const [getUsers, users, usersLoading, usersError] = useGetUsers();

    useEffect(() => {
        getUsers({ role: "TEACHER" })
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
                    Não foi possível carregar os níveis
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
                            <ContentBoxTableHeader title="Professores Cadastrados" />
                        } 
                        content={
                            <TeachersTable content={rows} />
                        }
                        sideContent={
                            <ContentBoxTableSideContent 
                                onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)}
                                onButtonClick={() => setShowDialog(true)} 
                                buttonLabel="Adicionar Professor" 
                                searchPlaceholder="Professor"
                            />
                        }
                    />
                    <AddTeacherDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
                </>
            }
        </>
    );
}

export default TeachersContentTable;
