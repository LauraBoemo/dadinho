import { useTheme } from "../../../theme";
import { ContentBox, DadinhoBarChart, DadinhoStack, DadinhoTypography, StudentsProgressContentTable } from "../../../components";

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
    
    return (
        <DadinhoStack direction="column" spacing={1} ml={2} sx={{ overflow: "auto" }}>
            <DadinhoStack direction="row" gap={1}>
                <ContentBox 
                    title={<DataContentBoxTitle title="Alunos cadastrados" />}
                    subtitle="Total de alunos cadastrados." 
                    content={
                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                            103
                        </DadinhoTypography>
                    }
                />
                <ContentBox 
                    title={<DataContentBoxTitle title="Alunos ativos" />}
                    subtitle="Alunos que avançaram do 1º nível." 
                    content={
                        <DadinhoStack direction="row" alignItems="flex-end">
                            <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                80
                            </DadinhoTypography>
                            <DadinhoTypography variant="h4">
                                (80% do total de alunos)
                            </DadinhoTypography>
                        </DadinhoStack>
                    }
                />
                <ContentBox 
                    title={<DataContentBoxTitle title="Nível mais alto atingido" />}
                    subtitle="Ao menos 1 aluno atingiu este nível." 
                    content={
                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                            4/20
                        </DadinhoTypography>
                    }
                />
            </DadinhoStack>
            <DadinhoStack direction="row" gap={1}>
                <ContentBox 
                    title={<DataContentBoxTitle title="Quantidade de alunos em níveis" />}
                    content={
                        <DadinhoBarChart />
                    }
                />
                <DadinhoStack direction="column" gap={1}>
                    <ContentBox 
                        title={<DataContentBoxTitle title="Maior média de tempo por nível" />}
                        content={
                            <DadinhoStack direction="row" alignItems="flex-end">
                                <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                    9min
                                </DadinhoTypography>
                                <DadinhoTypography variant="h4">
                                    (Nível 5)
                                </DadinhoTypography>
                            </DadinhoStack>
                        }
                    />
                    <ContentBox 
                        title={<DataContentBoxTitle title="Menor média de tempo por nível" />}
                        content={
                            <DadinhoStack direction="row" alignItems="flex-end">
                                <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                                    0.5min
                                </DadinhoTypography>
                                <DadinhoTypography variant="h4">
                                    (Nível 1)
                                </DadinhoTypography>
                            </DadinhoStack>
                        }
                    />
                </DadinhoStack>
            </DadinhoStack>
            <StudentsProgressContentTable />
        </DadinhoStack>
    );
}

export default DataPage;