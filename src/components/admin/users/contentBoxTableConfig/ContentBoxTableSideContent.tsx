import { DadinhoStack, DadinhoButton } from "../../../common";
import DadinhoSearchText from "../../../common/DadinhoSearchText";

interface ContentBoxTableSideContentProps {
    buttonLabel: string;
    searchPlaceholder: string;
}

export const ContentBoxTableSideContent = ({ buttonLabel, searchPlaceholder }: ContentBoxTableSideContentProps) => {

    return (
        <DadinhoStack direction="row" alignItems="center" justifyContent="flex-end" spacing={1} minWidth="40%">
            <DadinhoSearchText minWidth="50%" searchText={""} placeholder={`Pesquise por ${searchPlaceholder}`} onChange={() => console.log("test")} />
            <DadinhoButton sx={{ minWidth: "200px" }} variant="contained">{buttonLabel}</DadinhoButton>
        </DadinhoStack>
    );
}

export default ContentBoxTableSideContent;