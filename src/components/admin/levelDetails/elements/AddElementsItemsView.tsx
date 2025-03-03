
import { useState } from "react";
import { ItemResponse } from "../../../../apis/items/itemsService";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoButton } from "../../../common";
import { useTheme } from "../../../../theme";

interface AddElementsItemsViewProps {
    items: ItemResponse[];
    onItemSelected: (id: string) => void; 
}

export const AddElementsItemsView = ({ items, onItemSelected }: AddElementsItemsViewProps) => {
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
                </DadinhoBox>
            )}
            <DadinhoBox border="2px solid" paddingY={0.5} paddingX={1} borderRadius="10px">
                <DadinhoTypography>Item selecionado: {selectedItem?.icon}</DadinhoTypography>
            </DadinhoBox>
        </DadinhoStack>
    )
}