import { useNavigate } from "react-router-dom";
import { DadinhoLogo, DadinhoButton, DadinhoTypography } from "../../components";
import { PATHS } from "../../constants/Path";

export const LoginPage = () => {
    const navigate = useNavigate();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    return (
        <>
            <DadinhoLogo displayName={true} />
            <DadinhoButton variant="outlined" size="medium" onClick={goToLevels}>Comece a jogar!</DadinhoButton>
            <DadinhoTypography variant="h4" textAlign="center">dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default LoginPage;