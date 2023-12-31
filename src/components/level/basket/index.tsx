import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
import { BasquetItemProps } from "../../../apis/level/levelService";
import { useTheme } from "../../../theme";

interface BasketProps {
    items: BasquetItemProps[];
    index: number;
}

export const Basket = ({items, index}: BasketProps) => {
    const theme = useTheme();

    return (
        <DadinhoBox border="2px solid" borderRadius="10px" maxWidth="150px" minWidth="150px">
            <DadinhoStack direction="row" flexWrap="wrap" bgcolor={theme.palette.primary.light} padding={2} height="60px" alignItems="center" justifyContent="center">
                {items.map((product) => {
                    return (
                        <DadinhoTypography variant="h1" px={1}>
                            {product.icon}
                        </DadinhoTypography>
                    )
                })}
            </DadinhoStack>
            <DadinhoStack direction="column" padding={1}>
                <DadinhoStack direction="row" spacing={0.5}>
                    <DadinhoTypography variant="h3">
                        Cesto
                    </DadinhoTypography>
                    <DadinhoTypography variant="h3" fontWeight={theme.typography.fontWeightMedium}>
                        {index}
                    </DadinhoTypography>
                </DadinhoStack>
            </DadinhoStack>
        </DadinhoBox>
    );
}

export default Basket;