import { GameSubmitResponse, GameSubmitStatus } from "../../../apis/game/gameService";

export interface FormatBasketDiffProps extends Pick<GameSubmitResponse, "status"> {}

const getStatusErrorDescription = (status: GameSubmitStatus) => {
  switch(status) {
    case GameSubmitStatus.SYNYAX_ERROR:
      return "A ordem dos comandos está incorreta"
    default:
      return ""
  }
}

export const getStatusError = ({ status }: FormatBasketDiffProps) => {
  const errorDescription = getStatusErrorDescription(status)

  return "A ordem dos comandos está incorreta"
}

export default getStatusError;