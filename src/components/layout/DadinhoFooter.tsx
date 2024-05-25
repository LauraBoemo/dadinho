import { useTheme } from "../../theme";

import { DadinhoTypography } from "..";

export const DadinhoFooter = () => {
    const theme = useTheme();

    return <DadinhoTypography variant="h4" textAlign="center" color={theme.palette.secondary.light}>dadinho© 2024, Brasil</DadinhoTypography>

}

export default DadinhoFooter;