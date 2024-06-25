import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import AddStudentForm from "./AddStudentForm";

interface AddStudentDialogProps {
    isOpen: boolean;
    handleCloseDialog: () => void;
}

export const AddStudentDialog = ({ isOpen, handleCloseDialog }: AddStudentDialogProps) => {
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            hasCloseIcon
            fullWidth
            title={"Adicionar Aluno"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DadinhoDialogContent>
                <AddStudentForm onAddStudentSuccess={handleCloseDialog} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddStudentDialog;