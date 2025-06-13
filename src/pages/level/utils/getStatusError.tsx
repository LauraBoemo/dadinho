import { GameSubmitResponse, GameSubmitStatus } from "../../../apis/game/gameService";

export interface FormatBasketDiffProps extends Pick<GameSubmitResponse, "status"> {}

export const getStatusError = ({ status }: FormatBasketDiffProps) => {
  switch(status) {
    case GameSubmitStatus.SYNYAX_ERROR:
      return "A ordem dos comandos está incorreta"
    default:
      return ""
  }
}

export default getStatusError;