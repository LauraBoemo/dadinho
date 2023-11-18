import { useState } from "react";
import { ItemResponse } from "../../../apis/items/itemsService";
import { DadinhoBox, DadinhoTypography, DadinhoStack, DadinhoButton } from "../../common";

interface AddRecipeItemsViewProps {
    items: ItemResponse[];
    onItemSelected: (selectedIds: string[]) => void; // Update to accept an array of strings
}

export const AddRecipeItemsView = ({ items, onItemSelected }: AddRecipeItemsViewProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleItemClick = (id: string) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
        onItemSelected(selectedItems);
    }

    return (
        <DadinhoBox width="100%">
            {!items?.length ? (
                <DadinhoTypography textAlign="center" color="error">
                    Não existem itens cadastrados
                </DadinhoTypography>
            ) : (
                <DadinhoStack direction="column" spacing="10px">
                    <DadinhoStack 
                        sx={{
                            display: "grid",
                            gridGap: "5px",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        }}
                    >
                        {items.map((item: ItemResponse) => {
                            const isSelected = selectedItems.includes(item.id);
                            return (
                                <DadinhoButton 
                                    size="large" 
                                    key={item.id}
                                    onClick={() => handleItemClick(item.id)}
                                    color={isSelected ? "success" : "inherit"} // Change color if the item is selected
                                >
                                    {item.icon}
                                </DadinhoButton>
                            );
                        })}
                    </DadinhoStack>
                </DadinhoStack>
            )}
        </DadinhoBox>
    );
}
