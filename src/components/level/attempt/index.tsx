import { useMemo, useState } from "react";
import { DadinhoBox, DadinhoStack, DadinhoButton } from "../..";

interface AttemptProps {
    options: string[];
    handleAttempt: (attempt: string[]) => void;
}

const splitOnWord = (str: string) => {
    const word = "Pegue"
    const parts = str.split(word);
  
    const filteredParts = parts.filter(part => part.trim() !== '');
  
    const result = filteredParts.map((part, index) => (index > 0 ? word + part : part).trim());
  
    if (str.startsWith(word)) {
      result.unshift(word.trim());
    }
  
    return result;
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
        const selectedOptionsString = selectedOptionIds.map((id) => optionsWithIds.find(option => option.id === id)?.text).join('|');
        return splitOnWord(selectedOptionsString);
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
