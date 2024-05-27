import { useNavigate } from "react-router-dom";

import { PATHS } from "../../constants/Path";

import Login from "../../components/login";
import { DadinhoFooter, DadinhoHeader, DadinhoLink, DadinhoStack, DadinhoTypography } from "../../components";

import { adminVerify, setStorage } from "../../apis/utilsStorage";
import { LoginResponse } from "../../apis/login/loginService";

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (loggedInUser: LoginResponse) => {
        setStorage(loggedInUser);
        const isAdmin = adminVerify();
        navigate(isAdmin ? `${PATHS.ADMIN}/${PATHS.DATA}` : `${PATHS.LEVELS}`);

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
            <DadinhoHeader isMainPage displayLogoName />
            <DadinhoStack direction="column" spacing={2}>
                <DadinhoTypography variant="h1" textAlign="center" fontWeight="light">Começe a jogar!</DadinhoTypography>
                <Login onLoginSuccess={handleLogin} />
                <DadinhoLink onClick={handleAccessInstructions} underline="none" textAlign="center">Como conseguir acesso?</DadinhoLink>
            </DadinhoStack>
            <DadinhoFooter />
        </>
    );
}

export default LoginPage;