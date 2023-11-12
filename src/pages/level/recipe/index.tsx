import { DadinhoTypography, DadinhoBox, DadinhoStack } from "../../../components";
import { useTheme } from "../../../theme";

interface RecipeProps {
    title: string;
    description: string[];
}

export const Recipe = ({title, description}: RecipeProps) => {
    const theme = useTheme();

    return (
        <DadinhoBox border="2px solid" borderRadius="10px">
            <DadinhoBox bgcolor={theme.palette.primary.light} padding={1}>
                <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightMedium}>
                    {title}
                </DadinhoTypography>
            </DadinhoBox>
            <DadinhoStack direction="column" padding={1}>
                {description.map((row) => {
                    const rowText = row.split(" ");

                    return (
                        <DadinhoStack direction="row" spacing={0.5}>
                            <DadinhoTypography fontWeight={theme.typography.fontWeightMedium}>
                                {rowText[0]}
                            </DadinhoTypography>
                            <DadinhoTypography fontWeight={theme.typography.fontWeightLight}>
                                {rowText.slice(1).join(' ')}
                            </DadinhoTypography>
                        </DadinhoStack>
                    )
                })}
            </DadinhoStack>
        </DadinhoBox>
    );
}

export default Recipe;