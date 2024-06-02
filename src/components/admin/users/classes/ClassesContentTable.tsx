import { useState } from "react";
import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddClassDialog from "./AddClassDialog";

export const ClassesContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Turmas Cadastrados" />
                } 
                content={
                    <BasicTable />
                }
                sideContent={
                    <ContentBoxTableSideContent onButtonClick={() => setShowDialog(true)} buttonLabel="Adicionar Turma" searchPlaceholder="Turmas" />
                }
            />
            <AddClassDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
        </>
    );
}

export default ClassesContentTable;