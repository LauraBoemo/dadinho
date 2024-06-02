import { useState } from "react";
import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddStudentDialog from "./AddStudentDialog";

export const StudentsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Alunos Cadastrados" />
                } 
                content={
                    <BasicTable />
                }
                sideContent={
                    <ContentBoxTableSideContent onButtonClick={() => setShowDialog(true)} buttonLabel="Adicionar Aluno" searchPlaceholder="Alunos" />
                }
            />
            <AddStudentDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
        </>
    );
}

export default StudentsContentTable;