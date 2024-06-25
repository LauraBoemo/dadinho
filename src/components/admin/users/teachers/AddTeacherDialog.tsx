import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import AddTeacherForm from "./AddTeacherForm";

interface AddTeacherDialogProps {
    isOpen: boolean;
    handleCloseDialog: () => void;
}

export const AddTeacherDialog = ({ isOpen, handleCloseDialog }: AddTeacherDialogProps) => {
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
                <AddTeacherForm onAddTeacherSuccess={handleCloseDialog} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddTeacherDialog;