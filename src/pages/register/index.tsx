import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";

import Register from "../../components/register";
import { DadinhoLogo, DadinhoStack, DadinhoDivider, DadinhoTypography, DadinhoButton } from "../../components";

export const RegisterPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    const goToLogin = () => {
        navigate(`${PATHS.LOGIN}`);
    };

    return (
        <>
            <DadinhoLogo displayName={true} />
            <DadinhoStack direction="column" spacing={2}>
                <Register onRegisterSuccess={goToLevels} />
                <DadinhoDivider>
                    <DadinhoTypography variant="h3">
                        Já tem uma conta?
                    </DadinhoTypography>
                </DadinhoDivider>
                <DadinhoButton variant="contained" size="medium" onClick={goToLogin}>Faça seu login</DadinhoButton>
            </DadinhoStack>
            <DadinhoTypography variant="h4" textAlign="center" color={theme.palette.secondary.light}>dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default RegisterPage;