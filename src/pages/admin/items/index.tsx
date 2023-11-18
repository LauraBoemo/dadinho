import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PATHS } from "../../../constants/Path";

import { useGetItems } from "../../../apis/items/useGetItems";

import { AddItemForm, ItemsView } from "../../../components/items";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoIconButton, DadinhoDivider, DadinhoLoader } from "../../../components";

export const ItemsConfigPage = () => {
    const navigate = useNavigate();
    const [getItems, items, itemsLoading, itemsError] = useGetItems();
    
    useEffect(() => {
        handleItems();
    }, [])

    const goToHome = () => {
        navigate(`${PATHS.ADMIN}/${PATHS.HOME}`);
    }

    const handleItems = () => {
        getItems();
    }

    const handleAddItem = () => {
        toast.success('Item cadastrado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        handleItems();
    }

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            <DadinhoBox display="flex">
                <DadinhoIconButton onClick={goToHome}>
                    <KeyboardBackspaceRoundedIcon />
                </DadinhoIconButton>
            </DadinhoBox>
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Itens cadastrados
                        </DadinhoTypography>
                    </DadinhoDivider>
                    {!itemsLoading && itemsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os itens</DadinhoTypography>}
                    {itemsLoading ? <DadinhoLoader /> : <ItemsView items={items} />}
                </DadinhoStack>
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Cadastrar novo item
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <AddItemForm onItemSuccess={handleAddItem} />
                </DadinhoStack>
            </DadinhoStack>
        </DadinhoStack>
    );
}