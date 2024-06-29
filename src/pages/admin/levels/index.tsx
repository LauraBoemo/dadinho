import { DadinhoStack  } from "../../../components";
import { LevelsContentTable } from "../../../components/admin/levels";
import { ItemsContentTable } from "../../../components/admin/levels/items";

export const LevelsPage = () => {
    return (
        <DadinhoStack spacing={1} ml={2}>
            <LevelsContentTable />
            <ItemsContentTable />
        </DadinhoStack>
    );
}