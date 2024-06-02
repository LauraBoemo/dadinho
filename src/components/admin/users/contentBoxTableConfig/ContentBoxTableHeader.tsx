import { useTheme } from "../../../../theme";
import { DadinhoTypography } from "../../../common";

interface ContentBoxTableHeaderProps {
    title: string;
}

export const ContentBoxTableHeader = ({ title }: ContentBoxTableHeaderProps) => {
    const theme = useTheme();

    return (
        <DadinhoTypography alignContent="center" variant="h2" fontWeight={theme.typography.fontWeightLight}>
            {title}
        </DadinhoTypography>
    );
}

export default ContentBoxTableHeader;