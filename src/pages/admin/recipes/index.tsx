import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getStorage } from '../../../apis/utilsStorage';
import AddRecipeForm from '../../../components/level/addRecipeForm/AddRecipeForm';
import { DadinhoStack, DadinhoTypography, DadinhoDivider, ConfigsHeader } from "../../../components";

export const RecipesConfigPage = () => {
    const levelId = getStorage("id");

    const handleAddRecipe = () => {
        toast.success('Elemento da Receita cadastrado!', {
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
            <ConfigsHeader title="Novo elemento da receita" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Cadastrar novo elemento da receita
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <AddRecipeForm onNewRecipeSuccess={handleAddRecipe} levelId={levelId} />
                </DadinhoStack>
            </DadinhoStack>
        </DadinhoStack>
    );
}