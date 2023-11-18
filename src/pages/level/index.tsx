import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import { Recipe, Baskets, Attempt } from "../../components/level";
import { DadinhoIconButton, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";

import { PATHS } from "../../constants/Path";
import { useLevel } from "../../apis/level/useLevel";

export const LevelPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [getLevel, level, levelProgress, levelError] = useLevel();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    const handleAttempt = (attempt: any) => {
        console.log(attempt)
    }

    useEffect(() => {
        getLevel({ id: id })
    }, []);

    return (
        <DadinhoStack direction="column" spacing={2} pr={1.5} sx={{ overflowX: "hidden" }}>
            {!levelProgress && levelError && <DadinhoTypography variant="h3" color="error">Não foi possível carregar o nível</DadinhoTypography>}
            {levelProgress ?  <DadinhoLoader /> : (
                <>
                    <DadinhoStack direction="row" justifyContent="space-between" alignItems="center">
                        <DadinhoIconButton onClick={goToLevels}>
                            <KeyboardBackspaceRoundedIcon />
                        </DadinhoIconButton>
                        <DadinhoTypography variant="h1">{level.title}</DadinhoTypography>
                    </DadinhoStack>
                    <DadinhoStack direction="column" spacing={1}>
                        <Recipe title={level.title} recipe={level.recipe} />
                        <Baskets baskets={level.baskets} />
                    </DadinhoStack>
                    <Attempt options={level.options} handleAttempt={handleAttempt} />
                </>
            )}
        </DadinhoStack>
    );
}

export default LevelPage;