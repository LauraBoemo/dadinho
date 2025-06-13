import { DadinhoButton, DadinhoStack, DadinhoTypography } from "../../../components";
interface SubmitCorrectContentProps {
  onContinue: () => void;
}

export const SubmitCorrectContent = ({ onContinue }: SubmitCorrectContentProps) => {
  return (
    <>
      <DadinhoStack gap={"5px"} my={"20px"}>
        <DadinhoTypography fontSize={35} fontWeight={"fontWeightBold"} color={"secondary.dark"}>
          🥳 Correto! 🎉
        </DadinhoTypography>
        <DadinhoTypography fontSize={20} color={"secondary.dark"}>
          Parabéns!
        </DadinhoTypography>
      </DadinhoStack>
      <DadinhoButton variant="contained" onClick={onContinue}>
        Continuar ao próximo nível
      </DadinhoButton>
    </>
  )
}

export default SubmitCorrectContent;