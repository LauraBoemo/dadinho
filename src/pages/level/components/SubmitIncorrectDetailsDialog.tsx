import { formatBasketDiff } from "../utils";
import { GameSubmitResponse } from "../../../apis/game/gameService";
import DadinhoDialog, { DadinhoDialogContent } from "../../../components/common/DadinhoDialog";
import { DadinhoBox, DadinhoStack, DadinhoTypography, DadinhoButton } from "../../../components";
import getStatusError from "../utils/getStatusError";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../constants/Path";
import getErrorImage from "../utils/getErrorImage";
import BasketDiffDisplay from "../utils/BasketDiffDisplay";

interface SubmitIncorrectDetailsDialogProps extends Pick<GameSubmitResponse, "status" | "expected" | "finalBasket"> {
  isOpen: boolean;
  handleClose: () => void;
  onTryAgain: () => void;
}

export const SubmitIncorrectDetailsDialog = ({ status, expected, finalBasket, isOpen, handleClose, onTryAgain }: SubmitIncorrectDetailsDialogProps) => {
  const navigate = useNavigate();
  
  const basketDiff = formatBasketDiff({ expected: expected, finalBasket: finalBasket});
  const statusError = getStatusError({ status: status })

  const handleViewInstructions = () => {
    navigate(PATHS.GAME_INSTRUCTIONS);
  }

  const dialogClose = (_event: object, reason?: string) => {
    if (reason === "backdropClick") return;
    handleClose();
  };

  return (
    <DadinhoDialog
      disablePortal
      maxWidth="xs"
      fullWidth
      open={isOpen}
      onClose={dialogClose}
    >
      <DadinhoBox
        sx={{
          height: '220px',
          backgroundImage: `url(${getErrorImage()})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: "relative",
          mt: 1,
          zIndex: 10,
        }}
      />
      <DadinhoDialogContent>
        <DadinhoStack textAlign={"center"} gap={"10px"}>   
          <DadinhoTypography>
            Os erros foram...
          </DadinhoTypography>
          <DadinhoBox border="2px solid" borderRadius="10px" overflow="overlay" p={2} mb={2}>
            {statusError 
              ? (
                <DadinhoStack gap={2}>
                  <DadinhoTypography>{statusError}</DadinhoTypography>
                  <DadinhoButton variant="contained" onClick={handleViewInstructions}>
                    Conferir Instruções
                  </DadinhoButton>
                </DadinhoStack>
              ) : (
                <DadinhoTypography>
                  <BasketDiffDisplay expected={expected} finalBasket={finalBasket} />
                </DadinhoTypography>
              ) 
              }
          </DadinhoBox>
        </DadinhoStack>
        <DadinhoButton fullWidth variant="contained" onClick={onTryAgain}>Tentar novamente</DadinhoButton>
      </DadinhoDialogContent>
    </DadinhoDialog>
  )
}

export default SubmitIncorrectDetailsDialog;