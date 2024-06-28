import { useNavigate } from "react-router-dom";

import { adminVerify } from "../../apis/utilsStorage";
import { LevelsResponse } from "../../apis/levels/levelsService";

import { PATHS } from "../../constants/Path";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoLevelButton } from "../common"

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
        <DadinhoBox maxWidth="375px" margin="auto">
            {!levels?.length ? <DadinhoTypography textAlign="center" color="error">Não existem níveis cadastrados</DadinhoTypography> : (
                <DadinhoStack direction="column">
                    {levels && levels?.map((level: any, index: number) => {
                        let leftPercentage;
                        switch (index % 7) {
                            case 0:
                                leftPercentage = "70%";
                                break;
                            case 1:
                                leftPercentage = "220%";
                                break;
                            case 2:
                                leftPercentage = "-30%";
                                break;
                            case 3:
                                leftPercentage = "20%";
                                break;
                            case 4:
                                leftPercentage = "130%";
                                break;
                            case 5:
                                leftPercentage = "-60%";
                                break;
                            case 6:
                                leftPercentage = "100%";
                                break;
                            default:
                                leftPercentage = "40%";
                                break;
                        }

                        return (
                            <DadinhoLevelButton 
                                size="large" 
                                key={level.id}
                                onClick={() => goToLevel(level.id)}
                                color={level.isConcluded ? "success" : "inherit"}
                                disabled={isAdmin ? false : !level.isConcluded && (index !== 0 && !levels[index -1].isConcluded)}                
                                sx={{
                                    position: "relative",
                                    width: "fit-content",
                                    marginTop: 23.4,
                                    left: leftPercentage,
                                    transform: "translate(-50%, 0)",
                                }}
                            >
                                {level.icon}
                            </DadinhoLevelButton>
                        )
                    })}
                </DadinhoStack>
            )}
        </DadinhoBox>
    )
}