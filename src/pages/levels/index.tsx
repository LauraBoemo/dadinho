import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { getStorage } from "../../apis/utilsStorage";
import { useLevels } from "../../apis/levels/useLevels";

import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";
import { LevelsView } from "../../components/levels";
import { DadinhoBox, DadinhoIconButton, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";

export const LevelsPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const userId = useMemo(() => getStorage("id"), [])
    const [getLevels, levels, levelsLoading, levelsError] = useLevels();

    const goToConfig = () => {
        navigate(PATHS.CONFIG);
    }
    
    useEffect(() => {
        getLevels({ id: userId })
    }, []);

    return (
        <>
            <DadinhoStack direction="column" spacing="5px">
                <DadinhoTypography variant="h1">Boas vindas!</DadinhoTypography>
                <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightLight}>Continue com seu aprendizado... 😉</DadinhoTypography>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing="10px" height="250px" justifyContent="center" sx={{ overflowY: "auto" }}>
                {!levelsLoading && levelsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os níveis</DadinhoTypography>}
                {levelsLoading ? (
                        <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                            <DadinhoLoader />
                        </DadinhoBox>
                    )  : (
                        <LevelsView levels={levels} />
                    )
                }
            </DadinhoStack>
            <DadinhoBox display="flex" justifyContent="end">
                <DadinhoIconButton onClick={goToConfig}>
                    <SettingsOutlinedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
        </>
    );
}

export default LevelsPage;