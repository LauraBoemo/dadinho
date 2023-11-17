import { useTheme } from "../../../theme";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../..";
import { RecipeProps } from "../../../apis/level/levelService";

interface RecipeComponentProps {
    title: string;
    recipe: RecipeProps[];
}

export const Recipe = ({title, recipe}: RecipeComponentProps) => {
    const theme = useTheme();

    return (
        <DadinhoBox border="2px solid" borderRadius="10px">
            <DadinhoBox bgcolor={theme.palette.primary.light} padding={1}>
                <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightMedium}>
                    {title}
                </DadinhoTypography>
            </DadinhoBox>
            <DadinhoStack direction="column" padding={1}>
                {recipe.map((row) => {
                    return (
                        <DadinhoStack key={row.id} direction="row" spacing={0.5}>
                            <DadinhoTypography fontWeight={theme.typography.fontWeightMedium}>
                                {row.quantity}
                            </DadinhoTypography>
                            <DadinhoTypography fontWeight={theme.typography.fontWeightLight}>
                                {row.item.name} ({row.item.icon})
                            </DadinhoTypography>
                        </DadinhoStack>
                    )
                })}
            </DadinhoStack>
        </DadinhoBox>
    );
}

export default Recipe;