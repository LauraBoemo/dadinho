import { GameSubmitResponse } from "../../../apis/game/gameService";

export interface FormatBasketDiffProps extends Pick<GameSubmitResponse, "expected" | "finalBasket"> {}

export const formatBasketDiff = ({ expected, finalBasket }: FormatBasketDiffProps): string => {
  return Object.entries(expected)
    .filter(([emoji, qtyExpected]) => {
      const qtyHave = finalBasket[emoji] ?? 0;
      return qtyHave !== qtyExpected;
    })
    .map(([emoji, qtyExpected]) => {
      const qtyHave = finalBasket[emoji] ?? 0;
      return `O seu cesto tinha ${qtyHave} ${emoji}, mas precisava de ${qtyExpected} ${emoji}.`;
    })
    .join("\n");
}

export default formatBasketDiff;
