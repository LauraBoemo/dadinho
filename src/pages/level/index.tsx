import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import { Recipe, Baskets, Attempt } from "../../components/level";
import { DadinhoIconButton, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";

import { PATHS } from "../../constants/Path";
import { useLevel } from "../../apis/level/useLevel";
import { getStorage } from "../../apis/utilsStorage";
import { useLevelAttempt } from "../../apis/level/useLevelAttempt";

export const LevelPage = () => {
    const userId = getStorage("id");
    const { id } = useParams();
    const navigate = useNavigate();

    const [getLevel, level, levelProgress, levelError] = useLevel();
    const [postLevelAttempt, levelAttempt, levelAttemptProgress, levelAttemptError] = useLevelAttempt();

    const handleAttempt = (attempt: string[]) => {
        console.log(attempt);

        postLevelAttempt({
            userId: userId,
            levelId: id,
            userAnswers: attempt,
        });

        navigate(`${PATHS.ANSWER}${levelAttempt ? PATHS.CORRECT : PATHS.WRONG}`)
    }

    useEffect(() => {
        getLevel({ id: id })
    }, []);

    useEffect(() => {
        if(levelAttemptError) {
            toast.error('Não foi possível enviar tentativa, tente novamente mais tarde!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [levelAttemptError])

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    return (
        <DadinhoStack direction="column" spacing={2} pr={1.5} sx={{ overflowX: "hidden" }}>
            {!levelProgress && levelError && <DadinhoTypography variant="h3" color="error">Não foi possível carregar o nível</DadinhoTypography>}
            {levelProgress || levelAttemptProgress ? <DadinhoLoader /> : level && (
                <>
                    <DadinhoStack direction="row" alignItems="center" spacing={1}>
                        <DadinhoIconButton onClick={goToLevels}>
                            <KeyboardBackspaceRoundedIcon />
                        </DadinhoIconButton>
                        <DadinhoTypography variant="h1">{level?.title}</DadinhoTypography>
                    </DadinhoStack>
                    <DadinhoStack direction="column" spacing={1}>
                        <Recipe title={level?.title} recipe={level?.recipe} />
                        <Baskets baskets={level?.baskets} />
                    </DadinhoStack>
                    <Attempt options={level?.options} handleAttempt={handleAttempt} />
                </>
            )}
        </DadinhoStack>
    );
}

export default LevelPage;