import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "../../../constants/Path";
import { DadinhoStack, DadinhoIconButton, DadinhoTypography } from "../../common";


interface NavigationButtonProps {
    name: string;
    icon: ReactNode;
    navigationPath: PATHS;
}

export const NavigationButton = ({ name, icon, navigationPath }: NavigationButtonProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToConfig = () => {
        navigate(`${PATHS.ADMIN}/${navigationPath}`);
    }

    return (
        <DadinhoIconButton 
            variant="text" 
            onClick={goToConfig}
            color={`${PATHS.ADMIN}/${navigationPath}` === location.pathname ? "info" : "inherit"} 
        >
            <DadinhoStack direction="row" gap={1} alignContent="left">
                {icon}
                <DadinhoTypography>{name}</DadinhoTypography>
            </DadinhoStack>
        </DadinhoIconButton>
    )
}