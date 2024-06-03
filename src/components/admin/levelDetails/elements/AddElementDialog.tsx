import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import AddElementForm from "./AddElementForm";

interface AddElementDialogProps {
    isOpen: boolean;
    levelId: string;
    handleCloseDialog: () => void;
}

export const AddElementDialog = ({ isOpen, levelId, handleCloseDialog }: AddElementDialogProps) => {
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            hasCloseIcon
            fullWidth
            title={"Adicionar Professor"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DadinhoDialogContent>
                <AddElementForm levelId={levelId} onAddElementSuccess={handleCloseDialog} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddElementDialog;