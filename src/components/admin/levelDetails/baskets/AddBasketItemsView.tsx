import { useState } from "react";
import { useTheme } from "../../../../theme";
import { ItemResponse } from "../../../../apis/items/itemsService";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoButton } from "../../../common";

interface AddRecipeItemsViewProps {
    items: ItemResponse[];
    onItemSelected: (selectedIds: string[]) => void;
}

export const AddRecipeItemsView = ({ items, onItemSelected }: AddRecipeItemsViewProps) => {
    const theme = useTheme();
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleItemClick = (id: string) => {
        // Add the item to the selections array every time it is clicked
        const newSelectedItems = [...selectedItems, id];
        setSelectedItems(newSelectedItems);
        onItemSelected(newSelectedItems);
    }

    // Function to remove item from the list by index
    const removeItem = (index: number) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems.splice(index, 1); // Remove the item at the specified index
        setSelectedItems(newSelectedItems);
        onItemSelected(newSelectedItems);
    };

    return (
        <DadinhoStack width="100%" direction="column" gap={0.5}>
            <DadinhoTypography fontWeight={theme.typography.fontWeightMedium}>Selecione o item</DadinhoTypography>
            {!items?.length ? (
                <DadinhoTypography textAlign="center" color="error">
                    Não existem itens cadastrados
                </DadinhoTypography>
            ) : (
                <DadinhoBox
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    maxHeight="200px"
                    sx={{
                        overflowY: "auto",
                        overflowX: "hidden"
                    }}
                >
                    <DadinhoStack direction="column" spacing="10px">
                        <DadinhoStack 
                            sx={{
                                display: "grid",
                                gridGap: "5px",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            }}
                        >
                            {items.map((item: ItemResponse) => (
                                <DadinhoButton 
                                    size="large" 
                                    key={item.id}
                                    onClick={() => handleItemClick(item.id)}
                                >
                                    {item.icon}
                                </DadinhoButton>
                            ))}
                        </DadinhoStack>
                    </DadinhoStack>
                </DadinhoBox>
            )}
            <DadinhoBox border="2px solid" paddingY={0.5} paddingX={1} borderRadius="10px" marginTop={1}>
                <DadinhoStack direction="column" alignItems="center" gap={0.5}>
                    {selectedItems.map((id, index) => {
                        const item = items.find(item => item.id === id);
                        return (
                                <DadinhoButton fullWidth key={index} size="small" onClick={() => removeItem(index)} color="error">
                                    {item?.icon}
                                </DadinhoButton>
                        );
                    })}
                </DadinhoStack>
            </DadinhoBox>
        </DadinhoStack>
    );
}
