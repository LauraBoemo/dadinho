import { ReactNode } from "react";

import { useTheme } from "../../theme";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../common";

interface ContentBoxProps {
    title: ReactNode,
    subtitle?: string,
    sideContent?: ReactNode,
    content: ReactNode,
}

export const ContentBox = ({ title, subtitle, content, sideContent }: ContentBoxProps) => {
    const theme = useTheme();
    
    return (
        <DadinhoStack width="-webkit-fill-available" height="-webkit-fill-available" borderRadius="15px" p={3} border={`2px solid ${theme.palette.primary.main}`}>
            <DadinhoStack direction="row" justifyContent="space-between">
                <DadinhoTypography variant="h3" fontWeight={theme.typography.fontWeightMedium}>
                    {title}
                </DadinhoTypography>
                {sideContent && sideContent}
            </DadinhoStack>
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