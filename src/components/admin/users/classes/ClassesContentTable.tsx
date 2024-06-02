import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";

export const ClassesContentTable = () => {
    return (
        <ContentBox 
            title={
                <ContentBoxTableHeader title="Turmas Cadastrados" />
            } 
            content={
                <BasicTable />
            }
            sideContent={
                <ContentBoxTableSideContent buttonLabel="Adicionar Turma" searchPlaceholder="Turmas" />
            }
        />
    );
}

export default ClassesContentTable;