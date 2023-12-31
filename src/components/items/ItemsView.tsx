
import { ItemResponse } from "../../apis/items/itemsService";
import { DadinhoStack, DadinhoButton, DadinhoTypography, DadinhoBox } from "../common"

interface ItemsViewProps {
    items: ItemResponse[];
}

export const ItemsView = ({ items }: ItemsViewProps) => {
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
                            return (
                                <DadinhoButton 
                                    size="large" 
                                    key={level.id}
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