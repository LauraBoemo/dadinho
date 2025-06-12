import { formatBasketDiff } from "../utils";
import { GameSubmitResponse } from "../../../apis/game/gameService";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../../../components";

// {
//     "status": "INSUFFICIENT_ITEMS_ON_BASKET",
//     "errorDetail": "Cesto 3",
//     "expected": {
//         "🍌": 1,
//         "🍎": 1
//     },
//     "finalBasket": {
//         "🍌": 0,
//         "🍎": 0
//     }
// }

interface SubmitIncorrectDetailsDialogProps extends Pick<GameSubmitResponse, "errorDetail" | "expected" | "finalBasket"> {}

export const SubmitIncorrectDetailsDialog = ({ errorDetail, expected, finalBasket }: SubmitIncorrectDetailsDialogProps) => {
  const basketDiff = formatBasketDiff({ expected: expected, finalBasket: finalBasket})

  return (
    <DadinhoStack>
      <DadinhoTypography>
        Os erros foram...
      </DadinhoTypography>
      <DadinhoBox border="2px solid" borderRadius="10px" overflow="overlay" p={2}>
        {basketDiff}
      </DadinhoBox>
    </DadinhoStack>
  )
}

export default SubmitIncorrectDetailsDialog;