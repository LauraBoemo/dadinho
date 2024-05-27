import { useEffect } from "react";

import { DadinhoStack, DadinhoTypography, NavigationBar } from "../../../components";

import { useGetItems } from "../../../apis/items/useGetItems";
import { useAllLevels } from "../../../apis/levels/useAllLevels";
import { ContentBox } from "../../../components/admin/ContentBox";

export const HomePage = () => {
    const [getLevels, levels, levelsLoading, levelsError] = useAllLevels();
    const [getItems, items, itemsLoading, itemsError] = useGetItems();
    
    useEffect(() => {
        getItems();
        getLevels();
    }, [])

    return (
        <DadinhoStack direction="column" pr={8} spacing={2} width="100%" sx={{ overflow: "auto" }}>
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
    );
}