import { DadinhoBox, Basket, DadinhoTypography } from "../../../components";
import DadinhoDialog, { DadinhoDialogContent } from "../../../components/common/DadinhoDialog";

import { GameSubmitResponse, GameSubmitStatus } from "../../../apis/game/gameService";

import SubmitCorrectContent from "./SubmitCorrectContent";
import SubmitIncorrectContent from "./SubmitIncorrectContent";

import { countsToBasketItems, getSubmitImage } from "../utils";
import SubmitIncorrectDetailsDialog from "./SubmitIncorrectDetailsDialog";

interface SubmitFeedbackDialogProps extends GameSubmitResponse {}

export const SubmitFeedbackDialog = ({ errorDetail, expected, finalBasket, status }: SubmitFeedbackDialogProps) => {
    return (
      <>
        <DadinhoDialog
            disablePortal
            maxWidth="sm"
            fullWidth
            open={true}
            onClose={() => console.log("close")}
        >
            <DadinhoDialogContent>
              <DadinhoBox
                  sx={{
                      height: '220px',
                      backgroundImage: `url(${getSubmitImage()})`,
                      backgroundSize: 'auto',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      mb: -7,
                      position: "relative",
                      zIndex: 10,
                  }}
              />
              <DadinhoBox>   
                <DadinhoTypography>Seus comandos criaram...</DadinhoTypography>
                <DadinhoBox border="2px solid" borderRadius="10px" overflow="overlay" p={2}>
                  <Basket index={1} items={countsToBasketItems(finalBasket)} title={"Seu Cesto"} />
                </DadinhoBox>
                <DadinhoTypography>e Seu Cesto está...</DadinhoTypography>
                {
                  status === GameSubmitStatus.CORRECT 
                    && <SubmitCorrectContent /> 
                    || <SubmitIncorrectContent />
                }
              </DadinhoBox>
            </DadinhoDialogContent>
        </DadinhoDialog>
        <SubmitIncorrectDetailsDialog errorDetail={errorDetail} expected={expected} finalBasket={finalBasket} />
      </>
    );

}

export default SubmitFeedbackDialog;