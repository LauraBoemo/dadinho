import { ReactNode } from "react";

import { useTheme } from "../../theme";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../common";

interface ContentBoxProps {
    title: string,
    subtitle?: string,
    content: ReactNode,
}

export const ContentBox = ({ title, subtitle, content }: ContentBoxProps) => {
    const theme = useTheme();
    
    return (
        <DadinhoStack width="-webkit-fill-available" borderRadius="15px" p={3} border={`2px solid ${theme.palette.primary.main}`}>
            <DadinhoTypography variant="h3" fontWeight={theme.typography.fontWeightMedium}>
                {title}
            </DadinhoTypography>
            {subtitle && 
                <DadinhoTypography variant="h4">
                    {subtitle}
                </DadinhoTypography>
            }
            <DadinhoBox mt={2}>
                {content}
            </DadinhoBox>
        </DadinhoStack>
    )
}