import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme";

import { PATHS } from "../../constants/Path";

import Login from "../../components/login";
import { DadinhoLogo, DadinhoLink, DadinhoTypography, DadinhoStack } from "../../components";

import { adminVerify, setStorage } from "../../apis/utilsStorage";
import { LoginResponse } from "../../apis/login/loginService";

export const LoginPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLogin = (loggedInUser: LoginResponse) => {
        setStorage(loggedInUser);
        const isAdmin = adminVerify();
        navigate(isAdmin ? `${PATHS.ADMIN}/${PATHS.HOME}` : `${PATHS.LEVELS}`);

        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    const handleAccessInstructions = () => {
        navigate(`${PATHS.ACCESS_INSTRUCTIONS}`);

        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <>
            <DadinhoLogo displayName />
            <DadinhoStack direction="column" spacing={2}>
                <Login onLoginSuccess={handleLogin} />
                <DadinhoLink onClick={handleAccessInstructions} underline="none" textAlign="center">Como conseguir acesso?</DadinhoLink>
            </DadinhoStack>
            <DadinhoTypography variant="h4" textAlign="center" color={theme.palette.secondary.light}>dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default LoginPage;