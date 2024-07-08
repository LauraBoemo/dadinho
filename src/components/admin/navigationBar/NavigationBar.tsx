import { useNavigate } from "react-router-dom";

import { PATHS } from "../../../constants/Path";
import { useTheme } from "../../../theme";
import { DadinhoStack, DadinhoLogo, DadinhoBox, DadinhoIconButton } from "../../common";

import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagIcon from '@mui/icons-material/Flag';

import NavigationButton from "./NavigationButton";


export const NavigationBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    
    const goToConfig = () => {
        navigate(`${PATHS.ADMIN}/${PATHS.CONFIG}`);
    }
    
    return (
        <DadinhoStack 
            display="flex" 
            position="absolute" 
            alignItems="center"
            justifyContent="space-between"
            top={0}
            left={0}
            bottom={11.5}
            p={4}
            pr={3}
            mt={1}
            mb={0}
            borderRight={`2px solid ${theme.palette.primary.main}`}
        >
            <DadinhoStack direction="column" gap={2} alignItems="top">
                <DadinhoBox marginBottom={5}>
                    <DadinhoLogo displayName />
                </DadinhoBox>
                <NavigationButton name="Dados" icon={<MultilineChartIcon />} navigationPath={PATHS.DATA} />
                {sessionStorage.getItem("role") === "ADMIN" && <NavigationButton name="Usuários" icon={<PeopleAltIcon />} navigationPath={PATHS.USERS} />}
                {sessionStorage.getItem("role") === "ADMIN" && <NavigationButton name="Níveis" icon={<FlagIcon />} navigationPath={PATHS.LEVELS_CONFIG} />}
            </DadinhoStack>
            <DadinhoBox display="flex" justifyContent="left">
                <DadinhoIconButton onClick={goToConfig}>
                    <SettingsOutlinedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
        </DadinhoStack>

    )
}