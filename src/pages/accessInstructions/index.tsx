import { ReactNode } from "react";

import { useTheme } from "../../theme";

import { DadinhoTypography, DadinhoStack, DadinhoDivider, DadinhoLink, DadinhoHeader, DadinhoBox } from "../../components";
import { DadinhoFooter } from "../../components/layout";

interface AccessInstructionsHighlightProps {
    children: ReactNode,
}

const AccessInstructionsHightLight = ({ children }: AccessInstructionsHighlightProps) => {
    const theme = useTheme();

    return (
        <DadinhoTypography variant="h2" display="contents" color={theme.palette.warning.light}>
            {children}
        </DadinhoTypography>
    );
}

export const AccessInstructionsPage = () => {
    return (
        <DadinhoBox maxWidth="500px" display="flex" flexDirection="column" height="100%" justifyContent="space-between">
            <DadinhoHeader pageTitle={`Como conseguir acesso ao Dadinho?`} backButton />
            <DadinhoStack direction="column" spacing={3}>
                <DadinhoTypography variant="h2" fontWeight="light">Chame o seu <AccessInstructionsHightLight>professor responsável</AccessInstructionsHightLight> e solicite o seu acesso à ele.</DadinhoTypography>
                <DadinhoDivider />
                <DadinhoTypography variant="h2" fontWeight="light">Caso não conheça seu professor, envie um Email com seu <AccessInstructionsHightLight>Nome Completo</AccessInstructionsHightLight> e <AccessInstructionsHightLight>Colégio</AccessInstructionsHightLight> para:</DadinhoTypography>
                <DadinhoLink href={`mailto:contatoDadinho@gmail.com`} underline="none">lauraboemo@gmail.com</DadinhoLink>
            </DadinhoStack>
            <DadinhoFooter />
        </DadinhoBox>
    );
}

export default AccessInstructionsPage;