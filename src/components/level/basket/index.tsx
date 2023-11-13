import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
import { useTheme } from "../../../theme";

interface BasketProps {
    products: string[];
    index: number;
}

export const Basket = ({products, index}: BasketProps) => {
    const theme = useTheme();

    return (
        <DadinhoBox border="2px solid" borderRadius="10px" maxWidth="150px" minWidth="150px">
            <DadinhoStack direction="row" flexWrap="wrap" bgcolor={theme.palette.primary.light} padding={2} height="60px" alignItems="center" justifyContent="center">
                {products.map((product) => {
                    return (
                        <DadinhoTypography variant="h1" px={1}>
                            {product}
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