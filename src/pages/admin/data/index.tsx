import { useTheme } from "../../../theme";
import { ContentBox, DadinhoBarChart, DadinhoStack, DadinhoTypography } from "../../../components";

export const DataPage = () => {
    const theme = useTheme();
    
    return (
        <DadinhoStack direction="column" spacing={1} width="100%" sx={{ overflow: "auto" }}>
            <DadinhoStack direction="row" gap={1}>
                <ContentBox 
                    title="Alunos cadastrados" 
                    subtitle="Total de alunos cadastrados." 
                    content={
                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                            103
                        </DadinhoTypography>
                    }
                />
                <ContentBox 
                    title="Alunos ativos" 
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
                    title="Nível mais alto atingido" 
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
                    title="Quantidade de alunos em níveis" 
                    content={
                        <DadinhoBarChart />
                    }
                />
                <ContentBox 
                    title="Média de tempo por nível" 
                    content={
                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                            4/20
                        </DadinhoTypography>
                    }
                />
            </DadinhoStack>
                <ContentBox 
                    title="Nível mais alto por turma" 
                    content={
                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                            4/20
                        </DadinhoTypography>
                    }
                />
        </DadinhoStack>
    );
}

export default DataPage;