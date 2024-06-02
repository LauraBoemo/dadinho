import { DadinhoStack  } from "../../../components";
import { LevelsContentTable } from "../../../components/admin/levels";
import { ItemsContentTable } from "../../../components/admin/levels/items";

export const LevelsPage = () => {
    return (
        <DadinhoStack spacing={1} mr={2}>
            <LevelsContentTable />
            <ItemsContentTable />
        </DadinhoStack>
    );
}