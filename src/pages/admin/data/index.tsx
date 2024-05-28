import { ContentBox, DadinhoStack, DadinhoTypography } from "../../../components";

export const DataPage = () => {
    return (
        <DadinhoTypography>
            Data Page
            <DadinhoStack direction="column" spacing={2} width="100%" sx={{ overflow: "auto" }}>
                <ContentBox title="test" input={<DadinhoTypography>Test</DadinhoTypography>}>
                    Test
                </ContentBox>
                <ContentBox title="test" input={<DadinhoTypography>Test</DadinhoTypography>}>
                    Test
                </ContentBox>
                <ContentBox title="test" input={<DadinhoTypography>Test</DadinhoTypography>}>
                    Test
                </ContentBox>
                <ContentBox title="test" input={<DadinhoTypography>Test</DadinhoTypography>}>
                    Test
                </ContentBox>
            </DadinhoStack>
        </DadinhoTypography>
    );
}

export default DataPage;