import { useState } from "react";
import { DadinhoTypography, DadinhoBox, DadinhoStack, DadinhoButton } from "../../../components";
import { useTheme } from "../../../theme";

interface AttemptProps {
    options: string[];
}

export const Attempt = ({ options }: AttemptProps) => {
    const theme = useTheme();
    const [selectedOptions, setSelectedOptions] = useState([""]);

    const handleSelectAttempt = (attempt: string) => {
        setSelectedOptions([...selectedOptions, attempt])
    }

    return (
        <DadinhoStack direction="column" spacing={1}>
            <DadinhoBox border="2px solid" minWidth="100px" minHeight="100px" borderRadius="10px">
                {selectedOptions.map((option) => {
                    return (
                        <DadinhoTypography key={option}>{option}</DadinhoTypography>
                    )
                })}
            </DadinhoBox>       
            <DadinhoBox>
                {options.map((option, index) => {
                    return (
                        <DadinhoButton key={index} size="medium" onClick={() => handleSelectAttempt(option)}>
                            {option}
                        </DadinhoButton>
                    )
                })}
            </DadinhoBox>                
        </DadinhoStack>
    );
}

export default Attempt;