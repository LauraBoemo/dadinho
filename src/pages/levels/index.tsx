import { useNavigate } from "react-router-dom";
import { DadinhoBox, DadinhoButton, DadinhoIconButton, DadinhoStack, DadinhoTypography } from "../../components";
import { useTheme } from "../../theme";
import { PATHS } from "../../constants/Path";

import EastRoundedIcon from '@mui/icons-material/EastRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const levels = [
    {
        id: 123,
        image: "🥗",
        isConcluded: true,
    },
    {
        id: 456,
        image: "🍆",
        isConcluded: true,
    },
    {
        id: 789,
        image: "🧀",
        isConcluded: true,
    },
    {
        id: 110,
        image: "🍙",
        isConcluded: true,
    },
    {
        id: 111,
        image: "🍌",
        isConcluded: false,
    },
    {
        id: 112,
        image: "🍱",
        isConcluded: false,
    },
    {
        id: 113,
        image: "🌮",
        isConcluded: false,
    },
    {
        id: 114,
        image: "🍣",
        isConcluded: false,
    },
    {
        id: 115,
        image: "🍡",
        isConcluded: false,
    },
]

export const LevelsPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    
    const goToLevel = (id: number) => {
        navigate(`${PATHS.LEVELS}/${id}`);
    }

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
                        gridGap: "10px",
                        gridTemplateColumns: "1fr 1fr 1fr",
                    }}
                >
                    {levels.map((level, index) => {
                        return (
                            <DadinhoButton 
                                size="large" 
                                key={level.id}
                                onClick={() => goToLevel(level.id)}
                                color={level.isConcluded ? "success" : "inherit"}
                                disabled={!level.isConcluded && !levels[index -1].isConcluded}
                            >
                                {level.image}
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
                    <DadinhoIconButton>
                        <SettingsOutlinedIcon />
                    </DadinhoIconButton>
                </DadinhoStack>
            </DadinhoBox>
        </>
    );
}

export default LevelsPage;