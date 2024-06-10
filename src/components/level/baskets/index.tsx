import { Basket } from "..";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
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
            <DadinhoBox border="2px solid" borderRadius="10px" p={2} mt={"30px !important"}>
                <DadinhoBox 
                    bgcolor={theme.palette.primary.contrastText} 
                    borderRadius="10px" 
                    width="fit-content"
                    border="2px solid" 
                    mt={-4}
                    mb={2}
                    p={1}
                >
                    <DadinhoTypography>Cestos 🧺</DadinhoTypography>
                </DadinhoBox>
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
                    {baskets?.map((product, index) => {
                        return (
                            <Basket items={product.items} index={index + 1} />
                        )
                    })}
                </DadinhoStack>
            </DadinhoBox>
        )
    );
}

export default Baskets;