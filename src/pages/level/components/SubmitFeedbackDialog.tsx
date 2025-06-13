import { DadinhoBox, Basket, DadinhoTypography, DadinhoStack } from "../../../components";
import DadinhoDialog, { DadinhoDialogContent } from "../../../components/common/DadinhoDialog";

import { GameSubmitResponse, GameSubmitStatus } from "../../../apis/game/gameService";

import SubmitCorrectContent from "./SubmitCorrectContent";
import SubmitIncorrectContent from "./SubmitIncorrectContent";

import { countsToBasketItems, getSubmitImage } from "../utils";

interface SubmitFeedbackDialogProps extends GameSubmitResponse {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  onViewErrors: () => void;
}

  export const SubmitFeedbackDialog = ({ finalBasket, status, isOpen, onClose, onContinue, onViewErrors }: SubmitFeedbackDialogProps) => {
    const handleClose = (_event: object, reason?: string) => {
      if (reason === "backdropClick") return;
      onClose();
    };
    return (
        <DadinhoDialog
            disablePortal
            maxWidth="xs"
            fullWidth
            open={isOpen}
            onClose={handleClose}
            sx={{
              "> .MuiDialog-paper": {
                border: "2px solid blacks"
              }
            }}
        >
            <DadinhoBox
                sx={{
                    height: '220px',
                    backgroundImage: `url(${getSubmitImage()})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    mt: -2,
                    mb: -7,
                    position: "relative",
                    zIndex: 10,
                }}
            />
            <DadinhoDialogContent>
              <DadinhoStack textAlign={"center"} gap={"10px"}>   
                <DadinhoTypography>Seus comandos criaram...</DadinhoTypography>
                <DadinhoBox border="2px solid" borderRadius="10px" overflow="overlay" p={2} justifyItems={"center"}>
                  <Basket index={1} items={countsToBasketItems(finalBasket)} title={"Seu Cesto"} />
                </DadinhoBox>
                <DadinhoTypography>e Seu Cesto está...</DadinhoTypography>
                {
                  status === GameSubmitStatus.CORRECT
                    ? <SubmitCorrectContent onContinue={onContinue} />
                    : <SubmitIncorrectContent onViewErrors={onViewErrors} />
                }
              </DadinhoStack>
            </DadinhoDialogContent>
        </DadinhoDialog>
    );

}

export default SubmitFeedbackDialog;