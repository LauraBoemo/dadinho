import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import AddBasketForm from "./AddBasketForm";

interface AddBasketDialogProps {
    isOpen: boolean;
    levelId: string;
    handleCloseDialog: () => void;
}

export const AddBasketDialog = ({ isOpen, levelId, handleCloseDialog }: AddBasketDialogProps) => {
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            hasCloseIcon
            fullWidth
            title={"Adicionar Cesto"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DadinhoDialogContent>
                <AddBasketForm levelId={levelId} onAddBasketSuccess={handleCloseDialog} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddBasketDialog;