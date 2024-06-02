import { useState } from "react";
import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import AddLevelDialog from "./AddLevelDialog";

export const LevelsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Níveis Cadastrados" />
                } 
                content={
                    <BasicTable />
                }
                sideContent={
                    <ContentBoxTableSideContent onButtonClick={() => setShowDialog(true)} buttonLabel="Adicionar Nível" searchPlaceholder="Nível" />
                }
            />
            <AddLevelDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
        </>
    );
}

export default LevelsContentTable;
