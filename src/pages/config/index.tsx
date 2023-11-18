import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import { DadinhoButton, DadinhoTypography, DadinhoStack, DadinhoIconButton, DadinhoBox } from "../../components";
import { handleLogout } from "../../apis/utilsStorage";

export const ConfigPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    const goToLogin = () => {
        handleLogout();
        navigate(`${PATHS.LOGIN}`);
    };
    
    return (
        <>
            <DadinhoBox display="flex">
                <DadinhoIconButton onClick={goToLevels}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
            <DadinhoStack direction="column" spacing={2}>
                <DadinhoButton variant="contained" size="medium" onClick={goToLogin}>Sair</DadinhoButton>
            </DadinhoStack>
            <DadinhoTypography variant="h4" textAlign="center" color={theme.palette.secondary.light}>dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default ConfigPage;