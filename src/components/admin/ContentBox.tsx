import { ReactNode } from "react";

import { useTheme } from "../../theme";
import { DadinhoBox, DadinhoStack, DadinhoTypography } from "../common";

interface ContentBoxProps {
    title: string,
    input: ReactNode,
    children: ReactNode,
}

export const ContentBox = ({ title, input, children }: ContentBoxProps) => {
    const theme = useTheme();
    
    return (
        <DadinhoStack direction="column" gap={2}>
            <DadinhoStack direction="row" gap={1}>
                <DadinhoTypography variant="h1">{title}</DadinhoTypography>
                {input && input}
            </DadinhoStack>
            <DadinhoBox minHeight="200px" borderRadius="15px" p={3} border={`2px solid ${theme.palette.primary.main}`}>
                {children}
            </DadinhoBox>
        </DadinhoStack>

    )
}