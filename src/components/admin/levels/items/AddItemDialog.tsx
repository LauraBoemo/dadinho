import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import { AddItemForm } from "./AddItemForm";

interface AddItemDialogProps {
    isOpen: boolean;
    handleCloseDialog: () => void;
}

export const AddItemDialog = ({ isOpen, handleCloseDialog }: AddItemDialogProps) => {
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            hasCloseIcon
            fullWidth
            title={"Adicionar Item"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DadinhoDialogContent>
                <AddItemForm onAddItemSuccess={handleCloseDialog} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddItemDialog;