import { Dado } from "../icons";
import { useTheme } from "../theme"
import DadinhoBox from "./DadinhoBox"
import DadinhoStack from "./DadinhoStack";
import DadinhoTypography from "./DadinhoTypography";
interface DadinhoLogoProps {
    displayName?: boolean,
}

export const DadinhoLogo = ({ displayName = false}: DadinhoLogoProps) => {
    const theme = useTheme();

    return (
        <DadinhoStack direction="column" alignItems="center" gap={0.5}>
            <DadinhoBox sx={{ display: "inline-block", borderRadius: "50px", border: `2px solid ${theme.palette.primary.main}`, px: 1.5, pt: 1.2, pb: 1.1}}>
                <Dado width={40}/>
            </DadinhoBox>
            {displayName &&
                <DadinhoTypography variant="h1">dadinho</DadinhoTypography>
            }
        </DadinhoStack>
    )
}