import { PATHS } from "../../constants/Path";
import { useNavigate } from "react-router-dom";
import { DadinhoIconButton, DadinhoStack, DadinhoTypography } from "../../components";

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Recipe, Baskets, Attempt } from "../../components/level";
import { useMemo } from "react";

const level =  {
    id: 123,
    image: "🍌",
    title: "Batida de Banana",
    description: ["1 Banana", "1 Copo de Leite"],
    baskets: [["🥗", "🍎", "🍎"], ["🍣", "🥛"], ["🍌", "🍌", "🍌"]],
    options: ["Pegue", "1 Banana", "do cesto 3", "Pegue", "1 Copo de Leite", "do Cesto 2"],
}

export const LevelPage = () => {
    const navigate = useNavigate();
    const optionsWithIds = useMemo(() => level.options.map((option, index) => ({ id: index, text: option })), []);

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

    return (
        <DadinhoStack direction="column" spacing={2} pr={1.5} sx={{ overflowX: "hidden" }}>
            <DadinhoStack direction="row" justifyContent="space-between" alignItems="center">
                <DadinhoIconButton onClick={goToLevels}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>
                <DadinhoTypography variant="h1">{level.image}</DadinhoTypography>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing={1}>
                <Recipe title={level.title} description={level.description} />
                <Baskets products={level.baskets} />
            </DadinhoStack>
            <Attempt options={optionsWithIds} handleAttempt={handleAttempt} />
        </DadinhoStack>
    );
}

export default LevelPage;