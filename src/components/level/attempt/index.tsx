import { useMemo, useState } from "react";
import { DadinhoBox, DadinhoStack, DadinhoButton } from "../..";

interface AttemptProps {
    options: string[];
    handleAttempt: (attempt: string) => void;
}

export const Attempt = ({ options, handleAttempt }: AttemptProps) => {
    const optionsWithIds = useMemo(() => options.map((option: string, index: number) => ({ id: index, text: option })), []);

    const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);

    const handleSelectAttempt = (id: number) => {
        if (selectedOptionIds.includes(id)) {
            setSelectedOptionIds(selectedOptionIds.filter(optionId => optionId !== id));
        } else {
            setSelectedOptionIds([...selectedOptionIds, id]);
        }
    }

    const finalResult = () => {
        return selectedOptionIds
            .map((id) => optionsWithIds.find(option => option.id === id)?.text)
            .join('|');
    }

    return (
        <>
            <DadinhoStack direction="column" spacing={1}>
                <DadinhoBox border="2px solid" minWidth="100px" minHeight="100px" borderRadius="10px" padding="10px">
                    <DadinhoStack direction="row" flexWrap="wrap" gap={0.5}>
                        {selectedOptionIds.map((id) => {
                            const option = optionsWithIds.find(option => option.id === id);
                            return (
                                <DadinhoButton key={id} size="medium" onClick={() => handleSelectAttempt(id)}>
                                    {option?.text}
                                </DadinhoButton>
                            )
                        })}
                    </DadinhoStack>
                </DadinhoBox>       
                <DadinhoStack direction="row" flexWrap="wrap" gap={0.5}>
                    {optionsWithIds.map((option) => {
                        return (
                            <DadinhoButton
                                size="medium"
                                key={option.id}
                                onClick={() => handleSelectAttempt(option.id)}
                                disabled={selectedOptionIds.includes(option.id)}
                            >
                                {option.text}
                            </DadinhoButton>
                        )
                    })}
                </DadinhoStack>                
            </DadinhoStack>
            <DadinhoButton size="medium" disabled={options.length !== selectedOptionIds.length} onClick={() => handleAttempt(finalResult())}>
                Enviar
            </DadinhoButton>
        </>
    );
}

export default Attempt;
