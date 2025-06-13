/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Recipe, Baskets, Attempt, getRandomOptions } from "../../components/level";
import { DadinhoBox, DadinhoHeader, DadinhoLoader, DadinhoStack, DadinhoTypography } from "../../components";
import { SubmitFeedbackDialog, SubmitIncorrectDetailsDialog } from "./components";

import { useTheme } from "../../theme";

import { getStorage } from "../../apis/utilsStorage";
import { useGameSetup } from "../../apis/game/useGameSetup";
import { useGameSubmit } from "../../apis/game/useGameSubmit";
import { PATHS } from "../../constants/Path";

export const LevelPage = () => {
    const userId = getStorage("id");
    const { id } = useParams();
    const theme = useTheme();
    const navigate = useNavigate();

    const [seconds, setSeconds] = useState(0);
    const intervalId = useRef<NodeJS.Timeout | null>(null);
    const secondsRef = useRef(0);

    const [getGame, game, gameProgress, gameError] = useGameSetup();
    const [postGameSubmit, gameSubmit, gameSubmitProgress, gameSubmitError] = useGameSubmit();
    const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
    const [showIncorrectDialog, setShowIncorrectDialog] = useState(false);

    const options = useMemo(() => getRandomOptions(game?.recipe, game?.baskets), [game]);

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
        postGameSubmit({
            userId: userId,
            levelId: id,
            userAnswers: attempt,
            totalTime: seconds,
        });
    }

    const closeFeedbackDialog = () => {
        setShowFeedbackDialog(false);
    }

    const handleContinue = () => {
        navigate(PATHS.LEVELS);
    }

    const handleViewErrors = () => {
        setShowFeedbackDialog(false);
        setShowIncorrectDialog(true);
    }

    const handleTryAgain = () => {
        navigate(PATHS.LEVELS);
    }

    const closeIncorrectDialog = () => {
        setShowIncorrectDialog(false);
    }

    useEffect(() => {
        if (gameSubmit) {
            setShowFeedbackDialog(true);
        }
    }, [gameSubmit]);

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
        if(gameSubmitError) {
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
    }, [gameSubmitError])

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
                {gameProgress || gameSubmitProgress ? <DadinhoLoader /> : game && (
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
                        <Attempt options={options} handleAttempt={handleAttempt} />
                    </DadinhoStack>
                )}
            </DadinhoBox>
            {gameSubmit && (
                <SubmitFeedbackDialog
                    isOpen={showFeedbackDialog}
                    onClose={closeFeedbackDialog}
                    onContinue={handleContinue}
                    onViewErrors={handleViewErrors}
                    expected={gameSubmit.data?.expected || {}}
                    finalBasket={gameSubmit.data?.finalBasket || {}}
                    status={gameSubmit.data?.status || ""}
                />
            )}
            {gameSubmit && (
                <SubmitIncorrectDetailsDialog
                    isOpen={showIncorrectDialog}
                    status={gameSubmit.data?.status || {}}
                    handleClose={closeIncorrectDialog}
                    onTryAgain={handleTryAgain}
                    expected={gameSubmit.data?.expected || {}}
                    finalBasket={gameSubmit.data?.finalBasket || {}}
                />
            )}
        </DadinhoStack>
    );
}

export default LevelPage;
