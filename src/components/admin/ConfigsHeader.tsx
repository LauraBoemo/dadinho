import { useNavigate } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import { PATHS } from "../../constants/Path";
import { DadinhoStack, DadinhoIconButton, DadinhoTypography } from "../common";

interface ConfigsHeaderProps {
    title: string
}

export const ConfigsHeader = ({ title }: ConfigsHeaderProps) => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}`);
    }
    
    return (
        <DadinhoStack direction="row" alignItems="center" gap={1}>
            <DadinhoIconButton onClick={goToHome}>
                <KeyboardBackspaceRoundedIcon />
            </DadinhoIconButton>
            <DadinhoTypography variant="h1">
                {title}
            </DadinhoTypography>
        </DadinhoStack>

    )
}