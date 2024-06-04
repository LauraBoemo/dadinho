import { DadinhoButton, DadinhoStack } from "../../../components";
import { handleLogout } from "../../../apis/utilsStorage";
import { PATHS } from "../../../constants/Path";
import { useNavigate } from "react-router-dom";


export const AdminConfigPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        handleLogout();
        navigate(`${PATHS.LOGIN}`);
    };
    
    return (
        <DadinhoStack direction="column" spacing={1} mr={2} sx={{ overflow: "auto" }}>
            <DadinhoButton variant="outlined" size="medium" onClick={goToLogin}>Sair</DadinhoButton>
        </DadinhoStack>
    );
}

export default AdminConfigPage;