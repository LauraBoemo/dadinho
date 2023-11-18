import { useNavigate } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import theme from "../../../theme";
import { PATHS } from "../../../constants/Path";
import { DadinhoStack, DadinhoTypography, DadinhoButton, DadinhoBox, DadinhoIconButton, DadinhoDivider } from "../../../components";
import { useItems } from "../../../apis/items/useGetItems";
import { useEffect } from "react";
import { ItemResponse } from "../../../apis/items/itemsService";

export const ItemsConfigPage = () => {
    const navigate = useNavigate();
    const [getItems, items, itemsLoading, itemsError] = useItems();
    
    useEffect(() => {
        getItems();
    }, [])

    const goToAdminPage = (page: "items" | "baskets" | "levels") => {
        navigate(`${PATHS.ADMIN}/${page}`);
    }

    const goToHome = () => {
        navigate(`${PATHS.ADMIN}/${PATHS.HOME}`);
    }

    return (
        <>
            <DadinhoBox display="flex">
                <DadinhoIconButton onClick={goToHome}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
            <DadinhoStack direction="column" spacing="5px">
                <DadinhoDivider>
                    <DadinhoTypography variant="h3">
                        Itens cadastrados
                    </DadinhoTypography>
                </DadinhoDivider>
                <DadinhoStack 
                    sx={{
                        display: "grid",
                        gridGap: "5px",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
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
                <DadinhoDivider>
                    <DadinhoTypography variant="h3">
                        Para cadastrar novos itens
                    </DadinhoTypography>
                </DadinhoDivider>
            </DadinhoStack>
        </>
    );
}