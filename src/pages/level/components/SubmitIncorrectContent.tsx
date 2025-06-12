import { DadinhoButton, DadinhoStack, DadinhoTypography } from "../../../components";

interface SubmitIncorrectContentProps {
  onViewErrors: () => void;
}

export const SubmitIncorrectContent = ({ onViewErrors }: SubmitIncorrectContentProps) => {

  return (
    <>
      <DadinhoStack gap={"5px"} my={"20px"}>
        <DadinhoTypography fontSize={35} fontWeight={"fontWeightBold"} color={"warning.main"}>
          🤔 Incorreto 🐛
        </DadinhoTypography>
        <DadinhoTypography fontSize={20} color={"warning.main"}>
          Tente novamente!
        </DadinhoTypography>
      </DadinhoStack>
      <DadinhoButton variant="contained" onClick={onViewErrors}>
        Conferir Erros
      </DadinhoButton>
    </>
  )
}

export default SubmitIncorrectContent;