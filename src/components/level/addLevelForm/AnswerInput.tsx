import { useState } from "react";
import { DadinhoButton, DadinhoTextField, DadinhoStack, DadinhoTypography, DadinhoBox } from "../../common"

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { useTheme } from "../../../theme";

interface InsertAnswersProps {
    onAnswerUpdate: (answers: string[]) => void;
}

export const InsertAnswers = ({ onAnswerUpdate }: InsertAnswersProps ) => {
    const theme = useTheme();
    const [values, setValues] = useState<string[]>(['']); 

    const handleAddClick = () => {
        setValues([...values, '']); 
    };

    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    };

    const handleRemoveClick = (index: number) => {
        const newValues = values.filter((_, i) => i !== index); 
        setValues(newValues);
    };

    const getAllValues = () => {
        onAnswerUpdate(values);
        return values.join(' ');
    };

    return (
        <DadinhoStack direction="column" spacing={2}>
            <DadinhoStack spacing={1}>
                <DadinhoBox
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    maxHeight="140px"
                    sx={{
                        overflowY: "auto",
                        overflowX: "hidden"
                    }}
                >
                    {values.map((value, index) => (
                        <DadinhoStack key={index} direction="row" spacing={0.5} alignItems="center">
                            <DadinhoTextField
                                fullWidth
                                value={value}
                                onChange={handleInputChange(index)}
                                sx={{
                                    border: "2px solid",
                                    borderRadius: "10px",
                                    "> .MuiInputBase-formControl": {
                                        "> .MuiOutlinedInput-input": {
                                            padding: "7.5px 14px",
                                        },
                                        "> .MuiOutlinedInput-notchedOutline": {
                                            border: 0
                                        }
                                    } 
                                }}
                            />
                            {values.length > 1 && (
                                <DadinhoButton 
                                    onClick={() => handleRemoveClick(index)}
                                    sx={{ 
                                        padding: "0",
                                        minWidth: "5px",
                                        border: "0 !important",
                                    }}
                                >
                                    <HighlightOffIcon color="error" />
                                </DadinhoButton>
                            )}
                        </DadinhoStack>
                    ))}
                </DadinhoBox>
                <DadinhoButton onClick={handleAddClick} startIcon={<AddCircleOutlineOutlinedIcon color="success" />}>Nova opção</DadinhoButton>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing={1}>
                <DadinhoTypography textAlign="center" fontWeight={theme.typography.fontWeightMedium}>Respostas esperadas</DadinhoTypography>
                <DadinhoBox border="2px solid" minHeight="10px" borderRadius="10px" padding="10px">
                    <DadinhoTypography maxHeight="50px" sx={{ overflow: "overlay" }}>{getAllValues()}</DadinhoTypography>
                </DadinhoBox>
            </DadinhoStack>
        </DadinhoStack>
    )
}
