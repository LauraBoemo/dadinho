import { useNavigate } from "react-router-dom";

import theme from "../../../theme";
import { PATHS } from "../../../constants/Path";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoIconButton, DadinhoButton } from "../../../components";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const HomePage = () => {
    const navigate = useNavigate();
    
    const goToAdminPage = (page: "items" | "baskets" | "levels") => {
        navigate(`${PATHS.ADMIN}/${page}`);
    }

    const goToConfig = () => {
        navigate(PATHS.CONFIG);
    }

    return (
        <>
            <DadinhoStack direction="column" spacing="5px">
                <DadinhoTypography variant="h1">Boas vindas, doscente!</DadinhoTypography>
                <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightLight}>O que procuras fazer desta vez? 😊</DadinhoTypography>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing="10px">
                <DadinhoButton onClick={() => goToAdminPage("items")}>Itens</DadinhoButton>
                <DadinhoButton onClick={() => goToAdminPage("baskets")}>Cestos</DadinhoButton>
                <DadinhoButton onClick={() => goToAdminPage("levels")}>Níveis</DadinhoButton>
            </DadinhoStack>
            <DadinhoBox display="flex" justifyContent="end">
                <DadinhoStack direction="row" spacing="10px">
                    <DadinhoIconButton onClick={goToConfig}>
                        <SettingsOutlinedIcon />
                    </DadinhoIconButton>
                </DadinhoStack>
            </DadinhoBox>
        </>
    );
}