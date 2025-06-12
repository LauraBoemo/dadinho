import { formatBasketDiff } from "../utils";
import { GameSubmitResponse } from "../../../apis/game/gameService";
import DadinhoDialog, { DadinhoDialogContent } from "../../../components/common/DadinhoDialog";
import { DadinhoBox, DadinhoStack, DadinhoTypography, DadinhoButton } from "../../../components";

interface SubmitIncorrectDetailsDialogProps extends Pick<GameSubmitResponse, "errorDetail" | "expected" | "finalBasket"> {
  isOpen: boolean;
  handleClose: () => void;
  onTryAgain: () => void;
}

export const SubmitIncorrectDetailsDialog = ({ errorDetail, expected, finalBasket, isOpen, handleClose, onTryAgain }: SubmitIncorrectDetailsDialogProps) => {
  const basketDiff = formatBasketDiff({ expected: expected, finalBasket: finalBasket});

  return (
    <DadinhoDialog
      disablePortal
      maxWidth="xs"
      fullWidth
      open={isOpen}
      onClose={handleClose}
    >
      <DadinhoDialogContent>
        <DadinhoStack textAlign={"center"} gap={"10px"}>   
          <DadinhoTypography>
            Os erros foram...
          </DadinhoTypography>
          <DadinhoBox border="2px solid" borderRadius="10px" overflow="overlay" p={2}>
            {basketDiff}
          </DadinhoBox>
        </DadinhoStack>
        <DadinhoButton variant="contained" onClick={onTryAgain}>Tentar novamente</DadinhoButton>
      </DadinhoDialogContent>
    </DadinhoDialog>
  )
}

export default SubmitIncorrectDetailsDialog;