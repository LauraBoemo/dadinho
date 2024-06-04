import { useMemo, useState } from "react";
import { ContentBox } from "../contentBox";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../users/contentBoxTableConfig";
import StudentsProgressTable from "./StudentsProgressTable";

const mockedContent = [
    { name: "Rani Rani", teacher: "Laura", class: "Turma 2", serie: "6 Ano", highestLevel: "4", averageTime: "10" },
    { name: "Laura Boemo", teacher: "Laura", class: "Turma 2", serie: "6 Ano", highestLevel: "4", averageTime: "10" },
    { name: "Ana Clara", teacher: "Laura", class: "Turma 3", serie: "6 Ano", highestLevel: "4", averageTime: "10" },
    { name: "Julia Rachi", teacher: "Murilo", class: "Turma 1", serie: "6 Ano", highestLevel: "4", averageTime: "10" },
    { name: "Rafaela", teacher: "Luana", class: "Turma 4", serie: "6 Ano", highestLevel: "4", averageTime: "10" },
    { name: "Malu", teacher: "Luana", class: "Turma 4", serie: "6 Ano", highestLevel: "4", averageTime: "10" },
]

export const StudentsProgressContentTable = () => {
    const [searchKey, setSearchKey] = useState<string>();

    // TODO: Add Teachers Route
    // const userId = useMemo(() => getStorage("id"), [])
    // const [getLevels, levels, levelsLoading, levelsError] = useAllLevels();

    // useEffect(() => {
    //     getLevels({ id: userId })
    // }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return mockedContent;
      
        return mockedContent?.filter((level: { name: string; }) => 
          level.name.toLowerCase().includes(searchKey.toLowerCase())
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
                </>
             {/* } */}
        </>
    );
}

export default StudentsProgressContentTable;
