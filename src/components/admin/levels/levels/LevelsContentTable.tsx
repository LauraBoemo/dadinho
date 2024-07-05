import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import AddLevelDialog from "./AddLevelDialog";
import { getStorage } from "../../../../apis/utilsStorage";
import { useAllLevels } from "../../../../apis/levels/useAllLevels";
import LevelsTable from "./LevelsTable";

export const LevelsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();

    const userId = useMemo(() => getStorage("id"), [])
    const [getLevels, levels, levelsLoading, levelsError] = useAllLevels();

    useEffect(() => {
        getLevels({ id: userId })
    }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return levels;
      
        return levels?.filter((level: { title: string; }) => 
          level.title.toLowerCase().includes(searchKey.toLowerCase())
        );
      }, [levels, searchKey]);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Níveis Cadastrados" />
                } 
                content={
                    <>
                        {!levelsLoading && levelsError && 
                            <DadinhoTypography textAlign="center" color="error">
                                Não foi possível carregar os níveis
                            </DadinhoTypography>
                        }
                        {levelsLoading && 
                            <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                                <DadinhoLoader />
                            </DadinhoBox>
                        }
                        {!levelsLoading && !levelsError &&
                                        <LevelsTable content={rows} />
                        }
                    </>
                }
                sideContent={
                    <ContentBoxTableSideContent 
                        onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)}
                        onButtonClick={() => setShowDialog(true)} 
                        buttonLabel="Adicionar Nível" 
                        searchPlaceholder="Nível"
                    />
                }
            />
            <AddLevelDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
        </>
    );
}

export default LevelsContentTable;
