import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Recipe, Baskets, Attempt } from "../../components/level";
import { DadinhoBox, DadinhoHeader, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";

import { PATHS } from "../../constants/Path";
import { useLevel } from "../../apis/level/useLevel";
import { getStorage } from "../../apis/utilsStorage";
import { useLevelAttempt } from "../../apis/level/useLevelAttempt";
import { useTheme } from "../../theme";

export const LevelPage = () => {
    const userId = getStorage("id");
    const { id } = useParams();
    const theme = useTheme();
    const navigate = useNavigate();

    const [getLevel, level, levelProgress, levelError] = useLevel();
    const [postLevelAttempt, levelAttempt, levelAttemptProgress, levelAttemptError] = useLevelAttempt();

    const handleAttempt = (attempt: string[]) => {
        postLevelAttempt({
            userId: userId,
            levelId: id,
            userAnswers: attempt,
        });
    }

    useEffect(() => {
        if(levelAttempt !== null) {
            navigate(`${PATHS.ANSWER}${levelAttempt ? PATHS.CORRECT : PATHS.WRONG}`)
        }
    }, [levelAttempt])

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

    return (
        <DadinhoStack height="100vh" minWidth="100vw" sx={{ overflowX: "hidden" }}>
            <DadinhoBox 
                maxWidth="500px" 
                margin="auto" 
                sx={{ 
                    [theme.breakpoints.down('sm')]: {
                        maxWidth: "90vw",
                    },
                }}
            >
                {!levelProgress && levelError && <DadinhoTypography variant="h3" color="error">Não foi possível carregar o nível</DadinhoTypography>}
                {levelProgress || levelAttemptProgress ? <DadinhoLoader /> : level && (
                    <DadinhoStack px={0.5} spacing={3}>
                        <DadinhoHeader 
                            backButton 
                            backButtonCustomIcon={     
                                <DadinhoTypography variant="h1">Nível 0{level?.icon}</DadinhoTypography>
                            } 
                        />
                        <DadinhoStack direction="column" spacing={3}>
                            <Recipe recipe={level?.recipe} />
                            <Baskets baskets={level?.baskets} />
                        </DadinhoStack>
                        <Attempt options={level?.options} handleAttempt={handleAttempt} />
                    </DadinhoStack>
                )}
            </DadinhoBox>
        </DadinhoStack>
    );
}

export default LevelPage;