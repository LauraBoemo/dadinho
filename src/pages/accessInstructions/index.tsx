import { useNavigate } from "react-router-dom";

import { useTheme } from "../../theme";

import { DadinhoLogo, DadinhoTypography, DadinhoStack, DadinhoIconButton, DadinhoDivider, DadinhoLink } from "../../components";

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

export const AccessInstructionsPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handlePreviousPage = () => {
        navigate(-1);
    };
    
    return (
        <>
            <DadinhoStack direction="row" alignItems="center" justifyContent="space-between">
                <DadinhoIconButton onClick={handlePreviousPage}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>
                <DadinhoLogo width={20} />
            </DadinhoStack>
            <DadinhoStack direction="column" textAlign="center" height="60%" justifyContent="space-between">
                <DadinhoTypography variant="h1">Como conseguir acesso ao Dadinho?</DadinhoTypography>
                <DadinhoStack direction="column" spacing={3}>
                    <DadinhoTypography variant="h2" fontWeight="light">Chame o seu <DadinhoTypography variant="h2" display="contents" color={theme.palette.warning.light}>professor responsável</DadinhoTypography> e solicite o seu acesso à ele.</DadinhoTypography>
                    <DadinhoDivider />
                    <DadinhoTypography variant="h2" fontWeight="light">Caso não conheça seu professor, envie um Email com seu <DadinhoTypography variant="h2" display="contents" color={theme.palette.warning.light}>Nome Completo</DadinhoTypography> e <DadinhoTypography variant="h2" display="contents" color={theme.palette.warning.light}>Colégio</DadinhoTypography> para:</DadinhoTypography>
                    <DadinhoLink href={`mailto:contatoDadinho@gmail.com`} underline="none">contatoDadinho@gmail.com</DadinhoLink>
                </DadinhoStack>
            </DadinhoStack>
            <DadinhoTypography variant="h4" textAlign="center" color={theme.palette.secondary.light}>dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default AccessInstructionsPage;