import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { DadinhoStack, ConfigsHeader } from "../../../components";
import AddLevelForm from '../../../components/level/addLevelForm/AddLevelForm';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/Path';

export const LevelsConfigPage = () => {
    const navigate = useNavigate();
    
    const handleAddLevel = () => {
        toast.success('Nível cadastrado!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigate(`${PATHS.ADMIN}/${PATHS.DATA}`);
    }

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            <ConfigsHeader title="Novo nível" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <AddLevelForm onNewLevelSuccess={handleAddLevel} />
            </DadinhoStack>
        </DadinhoStack>
    );
}