import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { DadinhoLogo, DadinhoTypography, DadinhoStack, DadinhoIconButton } from "..";

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

interface DadinhoHeaderProps {
    isMainPage?: boolean;
    displayLogoName?: boolean;
    pageTitle?: string;
    backButton?: boolean;
    backButtonCustomIcon?: ReactNode,
}

export const DadinhoHeader = ({ isMainPage, pageTitle, displayLogoName, backButton, backButtonCustomIcon }: DadinhoHeaderProps) => {
    const navigate = useNavigate();

    const handlePreviousPage = () => {
        navigate(-1);
    };
    
    if (isMainPage) {
        return <DadinhoLogo displayName={displayLogoName} />
    }

    return (
        <DadinhoStack direction="column" spacing={3}>
            <DadinhoStack direction="row" alignItems="center" justifyContent="space-between">
                {backButton && (<DadinhoIconButton onClick={handlePreviousPage}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>)}
                {backButtonCustomIcon ? backButtonCustomIcon : <DadinhoLogo width={20} />}
            </DadinhoStack>
            {pageTitle && <DadinhoTypography variant="h1" lineHeight={1.2}>{pageTitle}</DadinhoTypography>}
        </DadinhoStack>
    );
}

export default DadinhoHeader;