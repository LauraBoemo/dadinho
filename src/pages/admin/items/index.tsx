import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { AddItemForm } from "../../../components/items";
import { DadinhoStack, DadinhoTypography, DadinhoDivider, ConfigsHeader } from "../../../components";

export const ItemsConfigPage = () => {
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
    }

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            <ConfigsHeader title="Novo item" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
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