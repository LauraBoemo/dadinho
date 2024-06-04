import { useState } from "react";

import { DadinhoStack, DadinhoBox, DadinhoTextField, DadinhoButton, DadinhoTypography } from "../../../common";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface InsertAnswersProps {
    onAnswerUpdate: (answers: string[]) => void;
}

export const AnswersInput = ({ onAnswerUpdate }: InsertAnswersProps ) => {
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
        <DadinhoStack direction="column" spacing={1} mb={1}>
            <DadinhoTypography variant="h3">Respostas esperadas</DadinhoTypography>
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
                                placeholder="Insira a opção"
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
            <DadinhoBox border="2px solid" minHeight="10px" borderRadius="10px" padding="10px">
                <DadinhoTypography maxHeight="50px" sx={{ overflow: "overlay" }}>{getAllValues()}</DadinhoTypography>
            </DadinhoBox>
        </DadinhoStack>
    )
}
