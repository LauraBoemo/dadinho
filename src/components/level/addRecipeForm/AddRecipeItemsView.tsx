
import { useState } from "react";
import { ItemResponse } from "../../../apis/items/itemsService";
import { DadinhoBox, DadinhoTypography, DadinhoStack, DadinhoButton } from "../../common";
import { useTheme } from "../../../theme";

interface AddRecipeItemsViewProps {
    items: ItemResponse[];
    onItemSelected: (id: string) => void; 
}

export const AddRecipeItemsView = ({ items, onItemSelected }: AddRecipeItemsViewProps) => {
    const theme = useTheme();
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

    const handleItemClick = (id: string) => {
        setSelectedItemId(id);
        onItemSelected(id); 
    }

    const selectedItem = items?.find(item => item.id === selectedItemId);

    return (
        <DadinhoStack width="100%" direction="column" gap={0.5}>
            <DadinhoTypography fontWeight={theme.typography.fontWeightMedium}>Selecione um item</DadinhoTypography>
            {!items?.length ? <DadinhoTypography textAlign="center" color="error">Não existem itens cadastrados</DadinhoTypography> : (
                <DadinhoStack direction="column" spacing="10px">
                    <DadinhoStack 
                        sx={{
                            display: "grid",
                            gridGap: "5px",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        }}
                    >
                        {items && items?.map((level: ItemResponse) => {
                            return (
                                <DadinhoButton 
                                    size="large" 
                                    key={level.id}
                                    onClick={() => onItemSelected !== null && handleItemClick(level.id)}
                                >
                                    {level.icon}
                                </DadinhoButton>
                            )
                        })}
                    </DadinhoStack>
                </DadinhoStack>
            )}
            <DadinhoBox border="2px solid" paddingY={0.5} paddingX={1} borderRadius="10px">
                <DadinhoTypography>Item selecionado: {selectedItem?.icon}</DadinhoTypography>
            </DadinhoBox>
        </DadinhoStack>
    )
}