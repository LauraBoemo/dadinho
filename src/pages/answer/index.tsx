import { useNavigate, useParams } from "react-router-dom";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { DadinhoStack, DadinhoLogo, DadinhoBox, DadinhoTypography, DadinhoIconButton } from "../../components";
import { PATHS } from "../../constants/Path";
import { useTheme } from "../../theme";
import { useMemo } from "react";

export const AnswerPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { status } = useParams();

    const goToLevels = () => {
        navigate(`${PATHS.LEVELS}`);
    };

    const isCorrect = useMemo(() => status === "correct", [status]);

    return (
        <DadinhoStack direction="column" height="70%" justifyContent="space-between">
            <DadinhoLogo />
            <DadinhoBox>
                <DadinhoBox border="2px solid" borderRadius="10px" bgcolor={theme.palette.primary.light} px={3} py={4} pt={6}>
                    <DadinhoStack direction="column" textAlign="center" spacing={0.5}>
                        <DadinhoBox marginTop="-100px !important" fontSize="90px">
                            {isCorrect ? "🎉" : "😿"}
                        </DadinhoBox>
                        <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>
                            {isCorrect ? "Resposta certa!" : "Resposta errada!"} 
                        </DadinhoTypography>
                        <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightLight}>
                            {isCorrect ? "Hora de ir para o próximo nível" : "Que tal tentar novamente?"} 
                        </DadinhoTypography>
                    </DadinhoStack>
                </DadinhoBox>
                <DadinhoBox display="flex" justifyContent="end" mt={-2.5}>
                    <DadinhoIconButton onClick={goToLevels}>
                        <EastRoundedIcon />
                    </DadinhoIconButton>
                </DadinhoBox>
            </DadinhoBox>
        </DadinhoStack>
    );
}

export default AnswerPage;