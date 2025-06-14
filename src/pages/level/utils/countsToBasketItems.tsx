import { BasquetItemProps } from "../../../apis/level/levelService";

export const countsToBasketItems = (counts: Record<string, number>): BasquetItemProps[] => {
  let result: BasquetItemProps[] = [];
  let id = 0;

  Object.entries(counts).forEach(([emoji, quantity]) => {
    for (let i = 0; i < quantity; i++) {
      result.push({
        id: id++,
        icon: emoji,
        name: emoji,
      });
    }
  });

  return result;
};

export default countsToBasketItems;
