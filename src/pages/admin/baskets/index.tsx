import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getStorage } from '../../../apis/utilsStorage';
import { DadinhoStack, DadinhoTypography, DadinhoDivider, ConfigsHeader } from "../../../components";
import AddBasketForm from '../../../components/level/addBasketForm/AddBasketForm';

export const BasketsConfigPage = () => {
    const levelId = getStorage("id");

    const handleAddBasket = () => {
        toast.success('Cesto cadastrado!', {
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
            <ConfigsHeader title="Novo cesto" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Cadastrar novo cesto
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <AddBasketForm onNewBasketSuccess={handleAddBasket} levelId={levelId} />
                </DadinhoStack>
            </DadinhoStack>
        </DadinhoStack>
    );
}