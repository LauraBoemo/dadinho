import React from "react";
import formatBasketDiff, { FormatBasketDiffProps } from "./formatBasketDiff";
import { DadinhoStack, DadinhoTypography } from "../../../components/common";

interface BasketDiffDisplayProps extends FormatBasketDiffProps {}

const BasketDiffDisplay: React.FC<BasketDiffDisplayProps> = (props) => {
  const diffText = formatBasketDiff(props);

  return (
    <DadinhoStack gap={2}>
      {diffText.split('\n').map((line, index) => (
        <DadinhoTypography key={index}>
            {line}
        </DadinhoTypography>
      ))}
    </DadinhoStack>
  );
};

export default BasketDiffDisplay;
