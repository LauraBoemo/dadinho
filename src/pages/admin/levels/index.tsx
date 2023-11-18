import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { DadinhoStack, DadinhoTypography, DadinhoDivider, ConfigsHeader } from "../../../components";
import AddLevelForm from '../../../components/level/addLevelForm/AddLevelForm';

export const LevelsConfigPage = () => {
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
    }

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            <ConfigsHeader title="Novo nível" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Cadastrar novo nível
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <AddLevelForm onNewLevelSuccess={handleAddLevel} />
                </DadinhoStack>
            </DadinhoStack>
        </DadinhoStack>
    );
}