import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";

export const TeachersContentTable = () => {
    return (
        <ContentBox 
            title={
                <ContentBoxTableHeader title="Professores Cadastrados" />
            } 
            content={
                <BasicTable />
            }
            sideContent={
                <ContentBoxTableSideContent buttonLabel="Adicionar Professor" searchPlaceholder="Professor" />
            }
        />
    );
}

export default TeachersContentTable;
