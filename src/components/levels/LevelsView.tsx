import { useNavigate } from "react-router-dom";

import { adminVerify } from "../../apis/utilsStorage";
import { LevelsResponse } from "../../apis/levels/levelsService";

import { PATHS } from "../../constants/Path";
import { DadinhoStack, DadinhoButton, DadinhoTypography, DadinhoBox } from "../common"

interface LevelsViewProps {
    levels: LevelsResponse[];
}

export const LevelsView = ({ levels }: LevelsViewProps) => {
    const navigate = useNavigate();
    const isAdmin = adminVerify();
    
    const goToLevel = (id: string) => {
        navigate(isAdmin ? `${PATHS.ADMIN}${PATHS.LEVELS}/${id}` : `${PATHS.LEVELS}/${id}`);
    }

    return (
        <DadinhoBox width="100%">
            {!levels?.length ? <DadinhoTypography textAlign="center" color="error">Não existem níveis cadastrados</DadinhoTypography> : (
                <DadinhoStack 
                    sx={{
                        display: "grid",
                        gridGap: "5px",
                        maxHeight: "250px",
                        gridTemplateColumns: isAdmin ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr",
                    }}
                >
                    {levels && levels?.map((level: any, index: number) => {
                        return (
                            <DadinhoButton 
                                size="large" 
                                key={level.id}
                                onClick={() => goToLevel(level.id)}
                                color={level.isConcluded ? "success" : "inherit"}
                                disabled={isAdmin ? false : !level.isConcluded && (index !== 0 && !levels[index -1].isConcluded)}
                            >
                                {level.icon}
                            </DadinhoButton>
                        )
                    })}
                </DadinhoStack>
            )}
        </DadinhoBox>
    )
}