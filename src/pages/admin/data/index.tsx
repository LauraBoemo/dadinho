import { useEffect } from "react";
import { useTheme } from "../../../theme";
import { useGetUsers } from "../../../apis/user/useGetUsers";
import { ContentBox, DadinhoBarChart, DadinhoBox, DadinhoLoader, DadinhoStack, DadinhoTypography, StudentsProgressContentTable } from "../../../components";
import { getTotalStudents, getCountStudentsPassedLevel1, getMaxLevelReached, getHighestAverageTime, getLowestAverageTime, formatStudentData, formatContentData } from "./utils";

interface DataContentBoxTitleProps {
    title: string;
}

const DataContentBoxTitle = ({ title }: DataContentBoxTitleProps) => {
    const theme = useTheme();

    return (
        <DadinhoTypography alignContent="center" variant="h3" fontWeight={theme.typography.fontWeightMedium}>
            {title}
        </DadinhoTypography>
    )
}

export const DataPage = () => {
    const theme = useTheme();
    const [getUsers, users, usersLoading, usersError] = useGetUsers();
    
    useEffect(() => {
        getUsers({ role: "STUDENT" })
    }, []);

    console.log(users);

    return (
        <>
            {!usersLoading && usersError && 
                <DadinhoTypography textAlign="center" color="error">
                    Não foi possível carregar os níveis
                </DadinhoTypography>
            }
            {usersLoading && 
                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                    <DadinhoLoader />
                </DadinhoBox>
            }
            <DadinhoStack direction="column" spacing={1} ml={2} sx={{ overflow: "auto" }}>
                <DadinhoStack direction="row" gap={1}>
                    <ContentBox 
                        title={<DataContentBoxTitle title="Alunos cadastrados" />}
                        subtitle="Total de alunos cadastrados." 
                        content={
                            <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                {getTotalStudents(users)}
                            </DadinhoTypography>
                        }
                    />
                    <ContentBox 
                        title={<DataContentBoxTitle title="Alunos ativos" />}
                        subtitle="Alunos que avançaram do 1º nível." 
                        content={
                            <DadinhoStack direction="row" alignItems="flex-end">
                                <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                    {getCountStudentsPassedLevel1(users)}
                                </DadinhoTypography>
                                <DadinhoTypography variant="h4">
                                    ({(getCountStudentsPassedLevel1(users)/getTotalStudents(users))*100}% do total de alunos)
                                </DadinhoTypography>
                            </DadinhoStack>
                        }
                    />
                    <ContentBox 
                        title={<DataContentBoxTitle title="Nível mais alto atingido" />}
                        subtitle="Ao menos 1 aluno atingiu este nível." 
                        content={
                            <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                {getMaxLevelReached(users)}/7
                            </DadinhoTypography>
                        }
                    />
                </DadinhoStack>
                <DadinhoStack direction="row" gap={1}>
                    <ContentBox 
                        title={<DataContentBoxTitle title="Quantidade de alunos em níveis" />}
                        content={
                            <DadinhoBarChart data={formatStudentData(users)} />
                        }
                    />
                    <DadinhoStack direction="column" gap={1}>
                        <ContentBox 
                            title={<DataContentBoxTitle title="Maior média de tempo por nível" />}
                            content={
                                <DadinhoStack direction="row" alignItems="flex-end">
                                    <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                        {getHighestAverageTime(users).averageTime}min
                                    </DadinhoTypography>
                                    <DadinhoTypography variant="h4">
                                        (Nível {getHighestAverageTime(users).level})
                                    </DadinhoTypography>
                                </DadinhoStack>
                            }
                        />
                        <ContentBox 
                            title={<DataContentBoxTitle title="Menor média de tempo por nível" />}
                            content={
                                <DadinhoStack direction="row" alignItems="flex-end">
                                    <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                        {getLowestAverageTime(users).averageTime}min
                                    </DadinhoTypography>
                                    <DadinhoTypography variant="h4">
                                        (Nível {getLowestAverageTime(users).level})
                                    </DadinhoTypography>
                                </DadinhoStack>
                            }
                        />
                    </DadinhoStack>
                </DadinhoStack>
                <StudentsProgressContentTable contentTable={formatContentData(users)} />
            </DadinhoStack>
        </>
    );
}

export default DataPage;