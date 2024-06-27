import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../contentBoxTableConfig";
import ClassesTable from "./ClassesTable";
import AddClassDialog from "./AddClassDialog";
import { useGetClasses } from "../../../../apis/class/useGetClasses";


export const ClassesContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();
    const [getClasses, classes, classesLoading, classesError] = useGetClasses();

    useEffect(() => {
        getClasses()
    }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return classes;
    
        return classes?.filter((turma: any) => {
            const searchKeyLower = searchKey.toLowerCase();
            const hasMatchingStudent = turma.students?.some((student: { name: string }) => 
                student.name.toLowerCase().includes(searchKeyLower)
            );
            const hasMatchingTeacher = turma.teacher?.name.toLowerCase().includes(searchKeyLower);
            const hasMatchingClassName = turma.name?.toLowerCase().includes(searchKeyLower);
    
            return hasMatchingClassName || hasMatchingStudent || hasMatchingTeacher;
        });
    }, [classes, searchKey]);
    

    return (
        <>
            {!classesLoading && classesError && 
                <DadinhoTypography textAlign="center" color="error">
                    Não foi possível carregar os níveis
                </DadinhoTypography>
            }
            {classesLoading && 
                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                    <DadinhoLoader />
                </DadinhoBox>
            }
            {!classesLoading && !classesError &&
                <>
                    <ContentBox 
                        title={
                            <ContentBoxTableHeader title="Turmas Cadastrados" />
                        } 
                        content={
                            <ClassesTable content={rows} />
                        }
                        sideContent={
                            <ContentBoxTableSideContent 
                                onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)} 
                                onButtonClick={() => setShowDialog(true)} 
                                buttonLabel="Adicionar Turma" 
                                searchPlaceholder="Turmas" 
                            />
                        }
                    />
                    <AddClassDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
                </>
            }
        </>
    );
}

export default ClassesContentTable;
