import { Basket } from "..";
import { DadinhoStack, DadinhoTypography } from "../..";
import { BasquetProps } from "../../../apis/level/levelService";
import { useTheme } from "../../../theme";

interface BasketsProps {
    baskets: BasquetProps[];
}

export const Baskets = ({ baskets }: BasketsProps) => {
    const theme = useTheme();

    return (
        !baskets?.length ? (
            <DadinhoTypography color="error">Não há cestos cadastrados para este nível</DadinhoTypography>
        ) : (
            <DadinhoStack spacing={1} 
                direction="row" 
                paddingBottom={1}
                sx={{ 
                    width: "500px", 
                    overflow: "auto", 
                    whiteSpace: "nowrap", 
                    
                    [theme.breakpoints.down('md')]: {
                        width: "300px",
                    } 
                }}
            >
                {baskets.map((product, index) => {
                    return (
                        <Basket items={product.items} index={index + 1} />
                    )
                })}
            </DadinhoStack>
        )
    );
}

export default Baskets;