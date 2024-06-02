import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";

export const StudentsContentTable = () => {
    return (
        <ContentBox 
            title={
                <ContentBoxTableHeader title="Alunos Cadastrados" />
            } 
            content={
                <BasicTable />
            }
            sideContent={
                <ContentBoxTableSideContent buttonLabel="Adicionar Aluno" searchPlaceholder="Alunos" />
            }
        />
    );
}

export default StudentsContentTable;