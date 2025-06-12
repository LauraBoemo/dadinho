import { Basket } from "..";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
import { GameSetupBasket } from "../../../apis/game/gameService";
import { useTheme } from "../../../theme";

interface BasketsProps {
    baskets: GameSetupBasket[];
}

export const Baskets = ({ baskets }: BasketsProps) => {
    const theme = useTheme();

    return (
        !baskets?.length ? (
            <DadinhoTypography color="error">Não há cestos cadastrados para este nível</DadinhoTypography>
        ) : (
            <DadinhoBox>   
                <DadinhoBox 
                        bgcolor={theme.palette.primary.contrastText} 
                        borderRadius="10px" 
                        width="fit-content"
                        border="2px solid" 
                        alignSelf="center"
                        margin="auto"
                        mb={-2}
                        p={1}
                        position="relative"
                    >
                        <DadinhoTypography>Cestos de Itens</DadinhoTypography>
                    </DadinhoBox>
                <DadinhoBox border="2px solid" borderRadius="10px" overflow="overlay" p={2}>
                    <DadinhoStack 
                        spacing={1} 
                        pt={1}
                        direction="row" 
                        sx={{ 
                            width: "580px", 
                            overflow: "auto", 
                            whiteSpace: "nowrap", 
                            
                            [theme.breakpoints.down('sm')]: {
                                width: "75vw",
                            } 
                        }}
                    >
                        {baskets?.map((product, index) => {
                            return (
                                <Basket items={product.items} index={index + 1} key={index + 1} />
                            )
                        })}
                    </DadinhoStack>
                </DadinhoBox>
            </DadinhoBox>
        )
    );
}

export default Baskets;