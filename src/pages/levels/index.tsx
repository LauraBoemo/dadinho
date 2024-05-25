import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { getStorage } from "../../apis/utilsStorage";
import { useLevels } from "../../apis/levels/useLevels";

import { PATHS } from "../../constants/Path";
import { LevelsView } from "../../components/levels";
import { DadinhoBox, DadinhoHeader, DadinhoIconButton, DadinhoLoader, DadinhoTypography } from "../../components";

export const LevelsPage = () => {
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
            <DadinhoHeader isMainPage />
            {!levelsLoading && levelsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os níveis</DadinhoTypography>}
            {levelsLoading ? (
                    <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                        <DadinhoLoader />
                    </DadinhoBox>
                )  : (
                    <LevelsView levels={levels} />
                )
            }
            <DadinhoBox display="flex" justifyContent="end">
                <DadinhoIconButton onClick={goToConfig}>
                    <SettingsOutlinedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
        </>
    );
}

export default LevelsPage;