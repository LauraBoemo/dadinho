import { useEffect } from "react";
import { useTheme } from "../../../theme";
import { useGameMetrics } from "../../../apis/game/useGameMetrics";
import { ContentBox, DadinhoBarChart, DadinhoBox, DadinhoLoader, DadinhoStack, DadinhoTypography, StudentsProgressContentTable } from "../../../components";
import { getTotalStudents, getCountStudentsPassedLevel1, getMaxLevelReached, getHighestAverageTime, getLowestAverageTime, formatStudentData, formatContentData } from "./utils";
import { useGetUsers } from "../../../apis/user/useGetUsers";

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
    const [getMetrics, metrics, metricsLoading, metricsError] = useGameMetrics();
    
    useEffect(() => {
        getMetrics();
        getUsers({ role: "STUDENT" })
    }, []);

    return (
        <>
            {!metricsLoading && metricsError && 
                <DadinhoTypography textAlign="center" color="error">
                    Não foi possível carregar os níveis
                </DadinhoTypography>
            }
            {metricsLoading && 
                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                    <DadinhoLoader />
                </DadinhoBox>
            }
            {(!metricsLoading || !usersLoading) && (!metricsError || !usersError) && 
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
                                        {getCountStudentsPassedLevel1(metrics)}
                                    </DadinhoTypography>
                                    <DadinhoTypography variant="h4">
                                        ({((getCountStudentsPassedLevel1(metrics)/getTotalStudents(users))*100).toFixed(2)}% do total de alunos)
                                    </DadinhoTypography>
                                </DadinhoStack>
                            }
                        />
                        <ContentBox 
                            title={<DataContentBoxTitle title="Nível mais alto atingido" />}
                            subtitle="Ao menos 1 aluno atingiu este nível." 
                            content={
                                <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                    {getMaxLevelReached(metrics)}/7
                                </DadinhoTypography>
                            }
                        />
                    </DadinhoStack>
                    <DadinhoStack direction="row" gap={1}>
                        <ContentBox 
                            title={<DataContentBoxTitle title="Quantidade de alunos em níveis" />}
                            content={
                                <DadinhoBarChart data={formatStudentData(metrics)} />
                            }
                        />
                        <DadinhoStack direction="column" gap={1}>
                            <ContentBox 
                                title={<DataContentBoxTitle title="Maior média de tempo por nível" />}
                                content={
                                    <DadinhoStack direction="row" alignItems="flex-end">
                                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                            {getHighestAverageTime(metrics).averageTime}min
                                        </DadinhoTypography>
                                        <DadinhoTypography variant="h4">
                                            (Nível {getHighestAverageTime(metrics).level})
                                        </DadinhoTypography>
                                    </DadinhoStack>
                                }
                            />
                            <ContentBox 
                                title={<DataContentBoxTitle title="Menor média de tempo por nível" />}
                                content={
                                    <DadinhoStack direction="row" alignItems="flex-end">
                                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                            {getLowestAverageTime(metrics).averageTime}min
                                        </DadinhoTypography>
                                        <DadinhoTypography variant="h4">
                                            (Nível {getLowestAverageTime(metrics).level})
                                        </DadinhoTypography>
                                    </DadinhoStack>
                                }
                            />
                        </DadinhoStack>
                    </DadinhoStack>
                    <StudentsProgressContentTable contentTable={formatContentData(users, metrics)} />
                </DadinhoStack>
            }
        </>
    );
}

export default DataPage;