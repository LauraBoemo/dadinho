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
        <DadinhoStack height="100vh" ml={-3} minWidth="100vw" justifyContent="space-between">
            <DadinhoBox 
                position="fixed" 
                margin="auto" 
                alignSelf="center" 
                zIndex="10" 
                mt={-2} 
                pb={2} 
                width="94.5%"
                sx={{ insetArea: "center" }}
                bgcolor={theme.palette.primary.contrastText} 
                boxShadow={`0 10px 10px 0px ${theme.palette.primary.contrastText}`}>
                <DadinhoHeader isMainPage />
            </DadinhoBox>
            <DadinhoBox bgcolor="white" border="2px solid black" borderRadius="15px" maxWidth="500px" margin="auto" px={1} py={2} mt={10} mb={-19}>
                <DadinhoStack>
                    <DadinhoTypography textAlign="center" variant="h2" fontWeight={theme.typography.fontWeightMedium}>Que bom tê-lo por aqui!</DadinhoTypography>
                    <DadinhoTypography textAlign="center" variant="h2" fontWeight={theme.typography.fontWeightLight} display="flex" gap="5px">Role pra baixo e explore! ▼</DadinhoTypography>
                </DadinhoStack>
            </DadinhoBox>
            {!levelsLoading && levelsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os níveis</DadinhoTypography>}
            {levelsLoading ? (
                    <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                        <DadinhoLoader />
                    </DadinhoBox>
                )  : (
                    <>
                        <LevelsView levels={levels} />
                        <DadinhoBox bgcolor="white" border="2px solid black" borderRadius="15px" maxWidth="500px" margin="auto" px={1} py={2} mt={40}>
                            <DadinhoStack>
                                <DadinhoTypography textAlign="center" variant="h2" fontWeight={theme.typography.fontWeightMedium}>Muito obrigada por jogar!</DadinhoTypography>
                                <DadinhoTypography textAlign="center" variant="h2" fontWeight={theme.typography.fontWeightLight}>Voltaremos com mais ;)</DadinhoTypography>
                            </DadinhoStack>
                        </DadinhoBox>
                    </>
                )
            }
            {/* @ts-ignore */}
            <DadinhoBox  position="fixed" right="20px" bottom="25px">
                <DadinhoIconButton onClick={goToConfig}>
                    <SettingsOutlinedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
        </DadinhoStack>
    );
}

export default LevelsPage;