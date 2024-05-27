import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { DadinhoButton, DadinhoStack, DadinhoFooter, DadinhoHeader, DadinhoTypography } from "../../components";
import { handleLogout } from "../../apis/utilsStorage";

interface ConfigContentProps {
    title: string,
    content: string,
}

const ConfigContent = ({ title, content }: ConfigContentProps) => {
    const theme = useTheme();

    return (
        <DadinhoStack direction="column" spacing={0.5} textAlign="left">
            <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightLight}>{title}</DadinhoTypography>
            <DadinhoTypography variant="h2">{content}</DadinhoTypography>
        </DadinhoStack>
    )
}

export const ConfigPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        handleLogout();
        navigate(`${PATHS.LOGIN}`);
    };
    
    return (
        <DadinhoStack height="100%" direction="column" justifyContent="space-between" textAlign="center">
            <DadinhoHeader backButtonCustomIcon={<SettingsOutlinedIcon />} backButton />
            <DadinhoStack direction="column" spacing={2}>
                {/* TODO: Complete this mock with real info */}
                <ConfigContent title="Seu Nome" content="Laura Boemo" />
                <ConfigContent title="Seu Email" content="lauraboemo@gmail.com" />
                <ConfigContent title="Sua Turma" content="Turma 04" />
                <ConfigContent title="Seu Professor" content="Paulo Pizzutti" />
            </DadinhoStack>
            <DadinhoButton variant="outlined" size="medium" onClick={goToLogin}>Sair</DadinhoButton>
            <DadinhoFooter />
        </DadinhoStack>
    );
}

export default ConfigPage;