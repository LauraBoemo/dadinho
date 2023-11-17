import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";

import Login from "../../components/login";
import { DadinhoLogo, DadinhoButton, DadinhoTypography, DadinhoStack, DadinhoDivider } from "../../components";

export const LoginPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    const goToRegister = () => {
        navigate(`${PATHS.REGISTER}`);
    };
    
    return (
        <>
            <DadinhoLogo displayName={true} />
            <DadinhoStack direction="column" spacing={2}>
                <Login onLoginSuccess={goToLevels} />
                <DadinhoDivider>
                    <DadinhoTypography variant="h3">
                        É novo por aqui?
                    </DadinhoTypography>
                </DadinhoDivider>
                <DadinhoButton variant="contained" size="medium" onClick={goToRegister}>Crie sua conta</DadinhoButton>
            </DadinhoStack>
            <DadinhoTypography variant="h4" textAlign="center" color={theme.palette.secondary.light}>dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default LoginPage;