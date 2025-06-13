import { BasquetItemProps } from "../../../apis/level/levelService";

export const countsToBasketItems = (counts: Record<string, number>): BasquetItemProps[] => {
  return Object.keys(counts).map((emoji, index) => ({
    id: index,
    icon: emoji,
    name: emoji
  }));
}

export default countsToBasketItems;