import { useNavigate } from "react-router-dom";

import { PATHS } from "../../constants/Path";

import Login from "../../components/login";
import { DadinhoFooter, DadinhoHeader, DadinhoLink, DadinhoStack } from "../../components";

import { adminVerify, setStorage } from "../../apis/utilsStorage";
import { LoginResponse } from "../../apis/login/loginService";
import { useTheme } from "../../theme";

export const LoginPage = () => {
    const theme = useTheme();
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
        <DadinhoStack p={1} maxWidth="500px" minWidth="500px" height="100vh" justifyContent={"space-between"} sx={{ 
            [theme.breakpoints.down('md')]: {
                minWidth: "300px",
              },
        }}>
            <DadinhoHeader isMainPage displayLogoName />
            <DadinhoStack direction="column" spacing={2}>
                <Login onLoginSuccess={handleLogin} />
                <DadinhoLink onClick={handleAccessInstructions} underline="none" textAlign="center">Como conseguir acesso?</DadinhoLink>
            </DadinhoStack>
            <DadinhoFooter />
        </DadinhoStack>
    );
}

export default LoginPage;