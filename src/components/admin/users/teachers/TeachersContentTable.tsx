import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddTeacherDialog from "./AddTeacherDialog";
import TeachersTable from "./TeachersTable";
import { useGetUsers } from "../../../../apis/user/useGetUsers";

export const TeachersContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();
    const [getUsers, users, usersLoading, usersError] = useGetUsers();

    useEffect(() => {
        getUsers({ role: "TEACHER" })
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
                    <ContentBoxTableHeader title="Professores Cadastrados" />
                } 
                content={
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
                            <TeachersTable content={rows} />
                        }
                    </>
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
    );
}

export default TeachersContentTable;
