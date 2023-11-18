import { useNavigate } from "react-router-dom";

import { PATHS } from "../../constants/Path";
import { DadinhoStack, DadinhoButton, DadinhoTypography } from "../common"
import { LevelsResponse } from "../../apis/levels/levelsService"

interface LevelsViewProps {
    levels: LevelsResponse[];
}

export const LevelsView = ({ levels }: LevelsViewProps) => {
    const navigate = useNavigate();
    
    const goToLevel = (id: string) => {
        navigate(`${PATHS.LEVELS}/${id}`);
    }

    return (
        <>
            {!levels?.length ? <DadinhoTypography textAlign="center" color="error">Não existem níveis cadastrados</DadinhoTypography> : (
                <DadinhoStack 
                    sx={{
                        display: "grid",
                        gridGap: "5px",
                        maxHeight: "250px",
                        gridTemplateColumns: "1fr 1fr 1fr",
                    }}
                >
                    {levels && levels?.map((level: any, index: number) => {
                        return (
                            <DadinhoButton 
                                size="large" 
                                key={level.id}
                                onClick={() => goToLevel((level.id).toString())}
                                color={level.isConcluded ? "success" : "inherit"}
                                disabled={!level.isConcluded && !levels[index -1].isConcluded}
                            >
                                {level.icon}
                            </DadinhoButton>
                        )
                    })}
                </DadinhoStack>
            )}
        </>
    )
}