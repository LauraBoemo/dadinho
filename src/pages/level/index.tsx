/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Recipe, Baskets, Attempt } from "../../components/level";
import { DadinhoBox, DadinhoHeader, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";

import { PATHS } from "../../constants/Path";
import { useTheme } from "../../theme";

import { getStorage } from "../../apis/utilsStorage";
import { useGameSetup } from "../../apis/game/useGameSetup";
import { useLevelAttempt } from "../../apis/level/useLevelAttempt";

export const LevelPage = () => {
    const userId = getStorage("id");
    const { id } = useParams();
    const theme = useTheme();
    const navigate = useNavigate();

    const [seconds, setSeconds] = useState(0);
    const intervalId = useRef<NodeJS.Timeout | null>(null);
    const secondsRef = useRef(0);

    const [getGame, game, gameProgress, gameError] = useGameSetup();
    const [postLevelAttempt, levelAttempt, levelAttemptProgress, levelAttemptError] = useLevelAttempt();

    function startCounting() {
        intervalId.current = setInterval(() => {
            secondsRef.current++;
            setSeconds(secondsRef.current);
        }, 1000);
    }

    function stopCounting() {
        if (intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    }

    const handleAttempt = (attempt: string[]) => {
        stopCounting();
        postLevelAttempt({
            userId: userId,
            levelId: id,
            userAnswers: attempt,
            totalTime: seconds,
        });
    }

    useEffect(() => {
        if(levelAttempt !== null) {
            navigate(`${PATHS.ANSWER}${levelAttempt ? PATHS.CORRECT : PATHS.WRONG}`)
        }
    }, [levelAttempt, navigate])

    useEffect(() => {
        getGame({ id: id })
    }, [id]);

    useEffect(() => {
        if (game) {
            startCounting();
        }
        return () => stopCounting();
    }, [game]);

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
                {!gameProgress && gameError && <DadinhoTypography variant="h3" color="error">Não foi possível carregar o nível</DadinhoTypography>}
                {gameProgress || levelAttemptProgress ? <DadinhoLoader /> : game && (
                    <DadinhoStack px={0.5} spacing={3}>
                        <DadinhoHeader 
                            backButton 
                            backButtonCustomIcon={     
                                <DadinhoTypography variant="h1">Nível 0{game?.icon}</DadinhoTypography>
                            } 
                        />
                        <DadinhoStack direction="column" spacing={3}>
                            <Recipe recipe={game?.recipe} />
                            <Baskets baskets={game?.baskets} />
                        </DadinhoStack>
                        <Attempt options={game?.options} handleAttempt={handleAttempt} />
                    </DadinhoStack>
                )}
            </DadinhoBox>
        </DadinhoStack>
    );
}

export default LevelPage;
