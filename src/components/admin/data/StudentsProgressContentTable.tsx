import { useMemo, useState } from "react";
import { ContentBox } from "../contentBox";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../users/contentBoxTableConfig";
import StudentsProgressTable from "./StudentsProgressTable";

export const StudentsProgressContentTable = (contentTable: any) => {
    const [searchKey, setSearchKey] = useState<string>();

    console.log(contentTable);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return contentTable.contentTable;
      
        return contentTable.contentTable?.filter((level: any) => 
          `Nível ${level?.highestLevel}`?.toLowerCase().includes(searchKey?.toLowerCase()) || 
          level?.name?.toLowerCase().includes(searchKey?.toLowerCase()) || 
          level?.teacher?.toLowerCase().includes(searchKey?.toLowerCase()) || 
          level?.class?.toLowerCase().includes(searchKey?.toLowerCase())
        );
      }, [contentTable.contentTable, searchKey]);

    return (
        <ContentBox 
            title={
                <ContentBoxTableHeader title="Progresso dos Alunos" />
            } 
            content={
                <StudentsProgressTable content={rows} />
            }
            sideContent={
                <ContentBoxTableSideContent 
                    onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)}
                    searchPlaceholder="Alunos" 
                />
            }
        />
    );
}

export default StudentsProgressContentTable;
