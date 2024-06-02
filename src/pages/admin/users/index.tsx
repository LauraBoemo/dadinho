import { ContentBox, DadinhoButton, DadinhoStack, DadinhoTypography } from "../../../components";
import BasicTable from "../../../components/common/DadinhoTable";
import DadinhoSearchText from "../../../components/common/DadinhoSearchText";
import { useTheme } from "../../../theme";

interface DataContentBoxTitleProps {
    title: string;
}

const UsersContentBoxTitle = ({ title }: DataContentBoxTitleProps) => {
    const theme = useTheme();

    return (
        <DadinhoStack direction="row" alignItems="center" spacing={1}>
            <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightMedium}>
                {title}
            </DadinhoTypography>
            <DadinhoSearchText searchText={""} placeholder="Pesquise" onChange={() => console.log("test")} />
        </DadinhoStack>
    )
} 

export const UsersPage = () => {
    return (
        <DadinhoStack spacing={1}>
            <ContentBox 
                title={<UsersContentBoxTitle title="Alunos Cadastrados" />} 
                content={
                    <BasicTable />
                }
                sideContent={
                    <DadinhoButton variant="contained">Adicionar Aluno</DadinhoButton>
                }
            />
            <ContentBox 
                title={<UsersContentBoxTitle title="Professores Cadastrados" />}
                content={
                    <BasicTable />
                }
                sideContent={
                    <DadinhoButton variant="contained">Adicionar Professor</DadinhoButton>
                }
            />
            <ContentBox 
                title={<UsersContentBoxTitle title="Turmas Cadastrados" />}
                content={
                    <BasicTable />
                }
                sideContent={
                    <DadinhoButton variant="contained">Adicionar Turma</DadinhoButton>
                }
            />
        </DadinhoStack>
    );
}

export default UsersPage;