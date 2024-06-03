import { useMemo, useState } from "react";
import { ContentBox } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import ClassesTable from "./ClassesTable";
import AddClassDialog from "./AddClassDialog";

const mockedContent = [
    { class: "2", serie: "6 Ano" },
    { class: "3", serie: "6 Ano" },
    { class: "1", serie: "6 Ano" },
    { class: "4", serie: "6 Ano" },
]

export const ClassesContentTable = () => {
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
      
        return mockedContent?.filter((level: { class: string; }) => 
          level.class.toLowerCase().includes(searchKey.toLowerCase())
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
                            <ContentBoxTableHeader title="Turmas Cadastrados" />
                        } 
                        content={
                            <ClassesTable content={rows} />
                        }
                        sideContent={
                            <ContentBoxTableSideContent 
                                onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)} 
                                onButtonClick={() => setShowDialog(true)} 
                                buttonLabel="Adicionar Turma" 
                                searchPlaceholder="Turmas" 
                            />
                        }
                    />
                    <AddClassDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
                </>
             {/* } */}
        </>
    );
}

export default ClassesContentTable;
