import DadinhoDialog, { DadinhoDialogContent } from "../../../common/DadinhoDialog";
import AddClassForm from "./AddClassForm";

interface AddClassDialogProps {
    isOpen: boolean;
    handleCloseDialog: () => void;
}

export const AddClassDialog = ({ isOpen, handleCloseDialog }: AddClassDialogProps) => {
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            hasCloseIcon
            fullWidth
            title={"Adicionar Turma"}
            open={isOpen}
            onClose={handleCloseDialog}
        >
            <DadinhoDialogContent>
                <AddClassForm onAddClassSuccess={() => console.log("test")} />
            </DadinhoDialogContent>
        </DadinhoDialog>
    );
}

export default AddClassDialog;