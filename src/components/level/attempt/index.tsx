import { useMemo, useState } from "react";
import { DadinhoBox, DadinhoStack, DadinhoButton } from "../..";

interface AttemptProps {
    options: { id: number; text: string; }[];
    handleAttempt: (attempt: number[]) => void;
}

export const Attempt = ({ options, handleAttempt }: AttemptProps) => {
    const [selectedOptionIds, setSelectedOptionIds] = useState<number[]>([]);

    const handleSelectAttempt = (id: number) => {
        if (selectedOptionIds.includes(id)) {
            setSelectedOptionIds(selectedOptionIds.filter(optionId => optionId !== id));
        } else {
            setSelectedOptionIds([...selectedOptionIds, id]);
        }
    }

    const shuffleOptions = (options: { id: number; text: string; }[]) => {
        let currentIndex = options.length, temporaryValue, randomIndex;
      
        while (currentIndex !== 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = options[currentIndex];
          options[currentIndex] = options[randomIndex];
          options[randomIndex] = temporaryValue;
        }
      
        return options;
    }
    
    const shuffledOptions = useMemo(() => shuffleOptions(options), [options]);

    return (
        <>
            <DadinhoStack direction="column" spacing={1}>
                <DadinhoBox border="2px solid" minWidth="100px" minHeight="100px" borderRadius="10px" padding="10px">
                    <DadinhoStack direction="row" flexWrap="wrap" gap={0.5}>
                        {selectedOptionIds.map((id) => {
                            const option = options.find(option => option.id === id);
                            return (
                                <DadinhoButton key={id} size="medium" onClick={() => handleSelectAttempt(id)}>
                                    {option?.text}
                                </DadinhoButton>
                            )
                        })}
                    </DadinhoStack>
                </DadinhoBox>       
                <DadinhoStack direction="row" flexWrap="wrap" gap={0.5}>
                    {shuffledOptions.map((option) => {
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
            <DadinhoButton size="medium" disabled={options.length !== selectedOptionIds.length} onClick={() => handleAttempt(selectedOptionIds)}>
                Enviar
            </DadinhoButton>
        </>
    );
}

export default Attempt;
