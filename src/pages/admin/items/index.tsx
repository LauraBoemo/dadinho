import { useEffect } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useGetItems } from "../../../apis/items/useGetItems";

import { AddItemForm, ItemsView } from "../../../components/items";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoDivider, DadinhoLoader, ConfigsHeader } from "../../../components";

export const ItemsConfigPage = () => {
    const [getItems, items, itemsLoading, itemsError] = useGetItems();
    
    useEffect(() => {
        handleItems();
    }, [])

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
            <ConfigsHeader title="Itens" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Itens cadastrados
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <DadinhoBox minWidth="200px" minHeight="200px">
                        {!itemsLoading && itemsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os itens</DadinhoTypography>}
                        {itemsLoading ? (
                                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                                    <DadinhoLoader />
                                </DadinhoBox>
                            )  : (
                                <ItemsView items={items} />
                            )
                        }
                    </DadinhoBox>
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