import { PATHS } from "../../constants/Path";
import { useNavigate } from "react-router-dom";
import { DadinhoIconButton, DadinhoStack, DadinhoTypography } from "../../components";

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Recipe, Baskets, Attempt } from "../../components/level";
import { useEffect, useMemo } from "react";
import { useLevel } from "../../apis/level/useLevel";

const level =  {
    id: 123,
    icon: "🍌",
    title: "Batida de Banana",
    answer: "Pegue 1 Banana do cesto 3 Pegue 1 Copo de Leite do Cesto 2",
    recipe: [
        {
            id: "1",
            item: {
                id: "001",
                icon: "banana",
                name: "banana",
            },
            quantity: 4,
        },
        {
            id: "21",
            item: {
                id: "001",
                icon: "leite",
                name: "leite",
            },
            quantity: 1,
        }
    ],
    baskets: [
        {
            id: 123,
            items: [
                {
                    id: 1,
                    icon: "apple",
                    name: "maça",
                },
                {
                    id: 2,
                    icon: "apple",
                    name: "maça",
                },
                {
                    id: 3,
                    icon: "apple",
                    name: "maça",
                }
            ]
        },
        {
            id: 432,
            items: [
                {
                    id: 1,
                    icon: "apple",
                    name: "maça",
                },
                {
                    id: 2,
                    icon: "apple",
                    name: "maça",
                },
                {
                    id: 3,
                    icon: "apple",
                    name: "maça",
                }
            ]
        }
    ],
    options: ["Pegue", "1 Banana", "do cesto 3", "Pegue", "1 Copo de Leite", "do Cesto 2"],
}

export const LevelPage = () => {
    const navigate = useNavigate();
    const [getLevel, level, levelProgress, levelError] = useLevel();

    const optionsWithIds = useMemo(() => level.options.map((option: string, index: number) => ({ id: index, text: option })), []);

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    const isCrescentNumericOrder = (attempt: number[]) => {
        return attempt.every((element, index, attempt) => {
            if (index === attempt.length - 1) return true;
            return element <= attempt[index + 1];
        });
    }

    const handleAttempt = (attempt: number[]) => {
        isCrescentNumericOrder(attempt) ? navigate(`${PATHS.ANSWER}/correct`) : navigate(`${PATHS.ANSWER}/wrong`);
    }

    // Add user id, progress and error status and REVIEW LOGIC
    useEffect(() => {
        getLevel()
    }, []);

    return (
        <DadinhoStack direction="column" spacing={2} pr={1.5} sx={{ overflowX: "hidden" }}>
            <DadinhoStack direction="row" justifyContent="space-between" alignItems="center">
                <DadinhoIconButton onClick={goToLevels}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>
                <DadinhoTypography variant="h1">{level.icon}</DadinhoTypography>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing={1}>
                <Recipe title={level.title} recipe={level.recipe} />
                <Baskets baskets={level.baskets} />
            </DadinhoStack>
            <Attempt options={optionsWithIds} handleAttempt={handleAttempt} />
        </DadinhoStack>
    );
}

export default LevelPage;