import { useEffect, useMemo, useState } from "react";
import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddTeacherDialog from "./AddTeacherDialog";
import { useAllLevels } from "../../../../apis/levels/useAllLevels";
import { getStorage } from "../../../../apis/utilsStorage";
import TeachersTable from "./TeachersTable";

const mockedContent = [
    { name: "Laura", assignedClass: "Turma 2" },
    { name: "Murilo", assignedClass: "Turma 3" },
    { name: "Luana", assignedClass: "Turma 1" },
    { name: "Flávio", assignedClass: "Turma 4" },
]

export const TeachersContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();

    // TODO: Add Teachers Route
    // const userId = useMemo(() => getStorage("id"), [])
    // const [getLevels, levels, levelsLoading, levelsError] = useAllLevels();

    // useEffect(() => {
    //     getLevels({ id: userId })
    // }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return mockedContent;
      
        return mockedContent?.filter((level: { name: string; }) => 
          level.name.toLowerCase().includes(searchKey.toLowerCase())
        );
      }, [mockedContent, searchKey]);

    return (
        <>
            {/* {!levelsLoading && levelsError && 
                <DadinhoTypography textAlign="center" color="error">
                    Não foi possível carregar os níveis
                </DadinhoTypography>
            }
            {levelsLoading && 
                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                    <DadinhoLoader />
                </DadinhoBox>
            }
            {!levelsLoading && !levelsError && */}
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
             {/* } */}
        </>
    );
}

export default TeachersContentTable;
