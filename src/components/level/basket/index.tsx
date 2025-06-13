import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
import { BasquetItemProps } from "../../../apis/level/levelService";
import { useTheme } from "../../../theme";

interface BasketProps {
    items: BasquetItemProps[];
    index: number;
    title?: string;
    customWidth?: string;
    customHeight?: string;
    noTitle?: boolean;
    customBg?: string;
}

export const Basket = ({ items, index, title, customWidth, noTitle, customBg, customHeight }: BasketProps) => {
    const theme = useTheme();

    return (
        <DadinhoBox border="2px solid" borderRadius="10px" width={customWidth ? customWidth : "150px"} height={customHeight ? customHeight : "120px"}>
            <DadinhoStack height="40px" direction="row" borderRadius="10px" flexWrap="wrap" bgcolor={customBg ? customBg : theme.palette.primary.light} padding={2} alignItems="center" justifyContent="center">
                {items?.map((product, index) => {
                    return (
                        <DadinhoTypography key={index + 1} variant="h1" px={1}>
                            {product.icon}
                        </DadinhoTypography>
                    )
                })}
            </DadinhoStack>
            {!noTitle &&
                <DadinhoStack direction="column" padding={1} borderRadius={2} bgcolor={theme.palette.primary.contrastText}>
                    <DadinhoStack direction="row" spacing={0.5}>
                        <DadinhoTypography variant="h3">
                            {title ? title : "Cesto"}
                        </DadinhoTypography>
                        {!title && (
                            <DadinhoTypography variant="h3" fontWeight={theme.typography.fontWeightMedium}>
                                {index}
                            </DadinhoTypography>
                        )}
                    </DadinhoStack>
                </DadinhoStack>
            }
        </DadinhoBox>
    );
}

export default Basket;