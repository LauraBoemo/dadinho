
import { useState } from "react";
import { ItemResponse } from "../../../apis/items/itemsService";
import { DadinhoBox, DadinhoTypography, DadinhoStack, DadinhoButton } from "../../common";

interface AddRecipeItemsViewProps {
    items: ItemResponse[];
    onItemSelected: (id: string) => void | null; 
}

export const AddRecipeItemsView = ({ items, onItemSelected }: AddRecipeItemsViewProps) => {
    const [itemClick, setItemClick] = useState("");

    const handleItemClick = (id: string) => {
        setItemClick(id);
        onItemSelected(id); 
    }

    return (
        <DadinhoBox width="100%">
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
                            const isSelected = itemClick === level.id;
                            return (
                                <DadinhoButton 
                                    size="large" 
                                    key={level.id}
                                    onClick={() => onItemSelected !== null && handleItemClick(level.id)}
                                    color={isSelected ? "success" : "inherit"}
                                >
                                    {level.icon}
                                </DadinhoButton>
                            )
                        })}
                    </DadinhoStack>
                </DadinhoStack>
            )}
        </DadinhoBox>
    )
}