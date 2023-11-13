import { Basket } from "..";
import { DadinhoStack } from "../..";
import { useTheme } from "../../../theme";

interface BasketsProps {
    products: string[][];
}

export const Baskets = ({products}: BasketsProps) => {
    const theme = useTheme();

    return (
        <DadinhoStack 
            spacing={1} 
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
            {products.map((product, index) => {
                return (
                    <Basket products={product} index={index + 1} />
                )
            })}
        </DadinhoStack>
    );
}

export default Baskets;