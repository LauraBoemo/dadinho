import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getStorage } from '../../../apis/utilsStorage';
import AddRecipeForm from '../../../components/level/addRecipeForm/AddRecipeForm';
import { DadinhoStack, DadinhoTypography, DadinhoDivider, ConfigsHeader } from "../../../components";
import { PATHS } from '../../../constants/Path';
import { useNavigate, useParams } from 'react-router-dom';

export const RecipesConfigPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
        navigate(`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}/${id}`);
    }

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            <ConfigsHeader title="Novo elemento da receita" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Cadastrar novo elemento
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <AddRecipeForm onNewRecipeSuccess={handleAddRecipe} levelId={id} />
                </DadinhoStack>
            </DadinhoStack>
        </DadinhoStack>
    );
}