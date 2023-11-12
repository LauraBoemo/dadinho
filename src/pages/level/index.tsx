import { useNavigate } from "react-router-dom";
import Recipe from "./recipe";
import Baskets from "./baskets";
import { PATHS } from "../../constants/Path";
import { DadinhoButton, DadinhoIconButton, DadinhoStack, DadinhoTypography } from "../../components";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import Attempt from "./attempt";

const level =  {
    id: 123,
    image: "🍌",
    title: "Batida de Banana",
    description: ["2 Melancias", "1 Banana", "1 Copo de Leite"],
    baskets: [["🥗", "🍎", "🍎"], ["🍣", "🥛"], ["🍌", "🍌", "🍌"]],
    options: ["Pegue", "2 Bananas", "do cesto 3", "Pegue", "1 Copo de Leite", "do Cesto 2"],
}

export const LevelPage = () => {
    const navigate = useNavigate();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    return (
        <>
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
            <Attempt options={level.options} />
            <DadinhoButton size="medium">
                Enviar
            </DadinhoButton>
        </>
    );
}

export default LevelPage;