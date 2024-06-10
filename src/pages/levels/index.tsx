import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { getStorage } from "../../apis/utilsStorage";
import { useLevels } from "../../apis/levels/useLevels";

import { PATHS } from "../../constants/Path";
import { LevelsView } from "../../components/levels";
import { DadinhoBox, DadinhoHeader, DadinhoIconButton, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";

import { useTheme } from "../../theme";

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
        <DadinhoStack height="100vh" justifyContent="space-between">
            <DadinhoBox 
                position="fixed" 
                margin="auto" 
                alignSelf="center" 
                zIndex="10" 
                mt={-2} 
                pb={2} 
                width="50%"
                sx={{ insetArea: "center" }}
                bgcolor={theme.palette.primary.contrastText} 
                boxShadow={`0 10px 10px 0px ${theme.palette.primary.contrastText}`}>
                <DadinhoHeader isMainPage />
            </DadinhoBox>
            {!levelsLoading && levelsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os níveis</DadinhoTypography>}
            {levelsLoading ? (
                    <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                        <DadinhoLoader />
                    </DadinhoBox>
                )  : (
                    <>
                        <LevelsView levels={levels} />
                        <DadinhoBox bgcolor="white" border="2px solid black" borderRadius="15px" px={1} py={2} mt={20}>
                            <DadinhoTypography textAlign="center" variant="h4">Novos níveis estão sendo produzidos...</DadinhoTypography>
                            <DadinhoTypography width="100%" left={0} fontSize={40} textAlign="center" position="absolute">🚧👷</DadinhoTypography>
                        </DadinhoBox>
                    </>
                )
            }
            <DadinhoBox display="flex" justifyContent="end" position="fixed" sx={{ bottom: "30px", right: "40px" }}>
                <DadinhoIconButton onClick={goToConfig}>
                    <SettingsOutlinedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
        </DadinhoStack>
    );
}

export default LevelsPage;