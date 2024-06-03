import { useMemo, useState } from "react";
import { ContentBox } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import AddStudentDialog from "./AddStudentDialog";
import StudentsTable from "./StudentsTable";

const mockedContent = [
    { name: "Rani Rani", teacher: "Laura", class: "Turma 2", serie: "6 Ano" },
    { name: "Laura Boemo", teacher: "Laura", class: "Turma 2", serie: "6 Ano" },
    { name: "Ana Clara", teacher: "Laura", class: "Turma 3", serie: "6 Ano" },
    { name: "Julia Rachi", teacher: "Murilo", class: "Turma 1", serie: "6 Ano" },
    { name: "Rafaela", teacher: "Luana", class: "Turma 4", serie: "6 Ano" },
    { name: "Malu", teacher: "Luana", class: "Turma 4", serie: "6 Ano" },
]

export const StudentsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
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
                            <ContentBoxTableHeader title="Alunos Cadastrados" />
                        } 
                        content={
                            <StudentsTable content={rows} />
                        }
                        sideContent={
                            <ContentBoxTableSideContent 
                                onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)}
                                onButtonClick={() => setShowDialog(true)} 
                                buttonLabel="Adicionar Aluno" 
                                searchPlaceholder="Alunos" 
                            />
                        }
                    />
                    <AddStudentDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
                </>
             {/* } */}
        </>
    );
}

export default StudentsContentTable;
