import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import AddLevelDialog from "./AddLevelDialog";
import { getStorage } from "../../../../apis/utilsStorage";
import { useGameProgress } from "../../../../apis/game/useGameProgress";
import LevelsTable from "./LevelsTable";

export const LevelsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();

    const userId = useMemo(() => getStorage("id"), [])
    const [getGame, game, gameLoading, gameError] = useGameProgress();

    useEffect(() => {
        getGame({ id: userId })
    }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return game;
      
        return game?.filter((level: { title: string; }) => 
          level.title.toLowerCase().includes(searchKey.toLowerCase())
        );
      }, [game, searchKey]);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Níveis Cadastrados" />
                } 
                content={
                    <>
                        {!gameLoading && gameError && 
                            <DadinhoTypography textAlign="center" color="error">
                                Não foi possível carregar os níveis
                            </DadinhoTypography>
                        }
                        {gameLoading && 
                            <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                                <DadinhoLoader />
                            </DadinhoBox>
                        }
                        {!gameLoading && !gameError &&
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
