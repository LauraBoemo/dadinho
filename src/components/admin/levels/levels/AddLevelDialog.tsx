import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import AddLevelForm from "./AddLevelForm";

interface AddLevelDialogProps {
    isOpen: boolean;
    handleCloseDialog: () => void;
}

export const AddLevelDialog = ({ isOpen, handleCloseDialog }: AddLevelDialogProps) => {
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            hasCloseIcon
            fullWidth
            title={"Adicionar Nível"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DadinhoDialogContent>
                <AddLevelForm onAddLevelSuccess={handleCloseDialog} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddLevelDialog;