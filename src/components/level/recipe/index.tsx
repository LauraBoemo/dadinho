import { Basket, DadinhoBox, DadinhoTypography } from "../..";
import { RecipeProps } from "../../../apis/level/levelService";
import { useTheme } from "../../../theme";

interface RecipeComponentProps {
    title?: string;
    recipe: RecipeProps[];
}

interface TransformRecipeToBasketProps {
    recipe: RecipeProps[];
}

const TransformRecipeToBasket = ({ recipe }: TransformRecipeToBasketProps) => {
    const result: any[] = [];
    recipe.forEach(entry => {
        for (let i = 0; i < entry.quantity; i++) {
            result.push({...entry.item});
        }
    });

    return result;
}

export const Recipe = ({ title, recipe }: RecipeComponentProps) => {
    const theme = useTheme();
    const recipeToBasket = TransformRecipeToBasket({ recipe: recipe });

    return (
        !recipeToBasket?.length ? (
            <DadinhoTypography variant="h3" color="error">Não há receita cadastrada para este nível</DadinhoTypography>
        ) : (
            <DadinhoBox border="2px solid" borderRadius="10px" p={2}>
                <DadinhoBox 
                    bgcolor={theme.palette.primary.contrastText} 
                    borderRadius="10px" 
                    width="fit-content"
                    border="2px solid" 
                    mt={-4}
                    mb={2}
                    p={1}
                >
                    <DadinhoTypography>Objetivo 🏆</DadinhoTypography>
                </DadinhoBox>
                <Basket items={recipeToBasket} index={1} customWidth="200px" title="Cesto Final" />
            </DadinhoBox>
        )
    );
}

export default Recipe;