import { useNavigate } from "react-router-dom";
import { DadinhoBox, DadinhoButton, DadinhoIconButton, DadinhoStack, DadinhoTypography } from "../../components";
import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";

import EastRoundedIcon from '@mui/icons-material/EastRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useLevels } from "../../apis/levels/useLevels";
import { LevelsResponse } from "../../apis/levels/levelsService";
import { useEffect } from "react";

const levelsData = [
    {
        id: 123,
        icon: "🥗",
        isConcluded: true,
    },
    {
        id: 456,
        icon: "🍆",
        isConcluded: true,
    },
    {
        id: 789,
        icon: "🧀",
        isConcluded: true,
    },
    {
        id: 110,
        icon: "🍙",
        isConcluded: true,
    },
    {
        id: 111,
        icon: "🍌",
        isConcluded: false,
    },
    {
        id: 112,
        icon: "🍱",
        isConcluded: false,
    },
    {
        id: 113,
        icon: "🌮",
        isConcluded: false,
    },
    {
        id: 114,
        icon: "🍣",
        isConcluded: false,
    },
    {
        id: 115,
        icon: "🍡",
        isConcluded: false,
    },
]

export const LevelsPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [getLevels, levels, levelsProgress, levelsError] = useLevels();
    
    const goToLevel = (id: string) => {
        navigate(`${PATHS.LEVELS}/${id}`);
    }

    const goToConfig = () => {
        navigate(PATHS.CONFIG);
    }
    
    // Add user id, progress and error status
    useEffect(() => {
        getLevels({ id: "1" })
    }, []);

    return (
        <>
            <DadinhoStack direction="column" spacing="5px">
                <DadinhoTypography variant="h1">Boas vindas!</DadinhoTypography>
                <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightLight}>Continue com seu aprendizado... 😉</DadinhoTypography>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing="10px">
                <DadinhoStack 
                    sx={{
                        display: "grid",
                        gridGap: "5px",
                        gridTemplateColumns: "1fr 1fr 1fr",
                    }}
                >
                    {levels && levels?.map((level: LevelsResponse, index: number) => {
                        return (
                            <DadinhoButton 
                                size="large" 
                                key={level.id}
                                onClick={() => goToLevel(level.id)}
                                color={level.isConcluded ? "success" : "inherit"}
                                disabled={!level.isConcluded && !levels[index -1].isConcluded}
                            >
                                {level.icon}
                            </DadinhoButton>
                        )
                    })}
                </DadinhoStack>
                <DadinhoBox display="flex" justifyContent="end">
                    <DadinhoIconButton>
                        <EastRoundedIcon />
                    </DadinhoIconButton>
                </DadinhoBox>
            </DadinhoStack>
            <DadinhoBox display="flex" justifyContent="end">
                <DadinhoStack direction="row" spacing="10px">
                    <DadinhoIconButton>
                        <AutoAwesomeOutlinedIcon />
                    </DadinhoIconButton>
                    <DadinhoIconButton onClick={goToConfig}>
                        <SettingsOutlinedIcon />
                    </DadinhoIconButton>
                </DadinhoStack>
            </DadinhoBox>
        </>
    );
}

export default LevelsPage;