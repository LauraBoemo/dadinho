import { useMemo, useState } from "react";
import { DadinhoBox, DadinhoStack, DadinhoButton, DadinhoTypography, getTransformString, getBackgroundImage } from "../..";
import { useTheme } from "../../../theme";

interface AttemptProps {
    options: string[];
    handleAttempt: (attempt: string[]) => void;
}

export const Attempt = ({ options, handleAttempt }: AttemptProps) => {
    const theme = useTheme();
    const optionsWithIds = useMemo(() => options?.map((option: string, index: number) => ({ id: index, text: option })), []);

    const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);

    const handleSelectAttempt = (id: number) => {
        setSelectedOptionIds([...selectedOptionIds, id]);
    }

    const handleUnselectAttempt = (index: number) => {
        setSelectedOptionIds(selectedOptionIds.filter((_, i) => i !== index));
    }

    const finalResult = () => {
        const selectedOptionsString = selectedOptionIds?.map((id) => optionsWithIds.find(option => option.id === id)?.text).join('|');
        return getTransformString(selectedOptionsString);
    }

    return (
        <>
            <DadinhoStack
                direction="row" 
                justifyContent="space-between" 
                sx={{ 
                    [theme.breakpoints.down('sm')]: {
                        flexDirection: "column",
                    },
                }}
            >
                <DadinhoStack direction="column" spacing={1} mt={1}>   
                    <DadinhoStack direction="row" alignItems="center">
                        <DadinhoStack
                            direction="row"
                            flexWrap="wrap"
                            gap={0.5}
                            height="fit-content" 
                            maxWidth="75%"
                            sx={{ 
                                [theme.breakpoints.down('sm')]: {
                                    maxWidth: "60%",
                                },
                            }}
                        >
                            {optionsWithIds?.map((option) => {
                                return (
                                    <DadinhoButton
                                        size="medium"
                                        key={option.id}
                                        onClick={() => handleSelectAttempt(option.id)}
                                    >
                                        <DadinhoTypography variant="body1" py={0.5}>
                                            {option.text}
                                        </DadinhoTypography>
                                    </DadinhoButton>
                                )
                            })}
                        </DadinhoStack>      
                        <DadinhoBox
                            sx={{
                                height: '200px',
                                width: '280px',
                                backgroundImage: `url(${getBackgroundImage()})`,
                                backgroundSize: 'auto',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                zIndex: 10, 
                                ml: -3,
                                mt: -2,
                                mb: -3,
                            }}
                        />
                    </DadinhoStack>
                    <DadinhoBox bgcolor={theme.palette.primary.light} minHeight="110px" borderRadius="10px" padding="10px">
                        <DadinhoStack direction="row" flexWrap="wrap" gap={0.5} p={1.5}>
                            {!selectedOptionIds.length && 
                                <DadinhoTypography color={theme.palette.primary.main} textAlign="center" sx={{ opacity: 0.4}}>
                                    Selecione as palavras acima e forme as frases de comandos necessárias!
                                </DadinhoTypography>
                            }
                            {selectedOptionIds?.map((id, index) => {
                                const option = optionsWithIds.find(option => option.id === id);
                                return (
                                    <DadinhoButton sx={{ bgcolor: theme.palette.primary.contrastText }} key={`${id}-${index}`} size="medium" onClick={() => handleUnselectAttempt(index)}>
                                        <DadinhoTypography variant="body1" py={0.5}>
                                            {option?.text}
                                        </DadinhoTypography>
                                    </DadinhoButton>
                                )
                            })}
                        </DadinhoStack>
                    </DadinhoBox>              
                </DadinhoStack>
            </DadinhoStack>
            <DadinhoButton size="medium" variant="contained" disabled={!selectedOptionIds.length} onClick={() => handleAttempt(finalResult())}>
                Enviar
            </DadinhoButton>
        </>
    );
}

export default Attempt;
