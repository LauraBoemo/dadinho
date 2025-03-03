import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "../../../constants/Path";
import { DadinhoStack, DadinhoIconButton, DadinhoTypography } from "../../common";

interface NavigationButtonProps {
    name: string;
    icon: ReactNode;
    navigationPath: PATHS;
}

const NavigationButton = ({ name, icon, navigationPath }: NavigationButtonProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToConfig = () => {
        navigate(`${PATHS.ADMIN}/${navigationPath}`);
    }

    return (
        <DadinhoIconButton 
            variant="text" 
            onClick={goToConfig}
            fullWidth
            color={location.pathname.includes(`${PATHS.ADMIN}/${navigationPath}`) ? "info" : "inherit"} 
        >
            <DadinhoStack width="100%" direction="row" gap={1} alignContent="left">
                {icon}
                <DadinhoTypography alignSelf="center">{name}</DadinhoTypography>
            </DadinhoStack>
        </DadinhoIconButton>
    )
}

export default NavigationButton;
