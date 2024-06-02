import DadinhoDialog from "../../../common/DadinhoDialog";

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
            title={"test"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            Test
        </DadinhoDialog>
    );
}

export default AddStudentDialog;