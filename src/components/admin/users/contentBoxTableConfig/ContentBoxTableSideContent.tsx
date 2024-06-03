import { useEffect, useState } from "react";
import { DadinhoStack, DadinhoButton } from "../../../common";
import DadinhoSearchText from "../../../common/DadinhoSearchText";
import { useDebounce } from "../../../../utils/useDedupe";

interface ContentBoxTableSideContentProps {
    buttonLabel?: string;
    onButtonClick?: () => void;
    onSearchKeyUpdate?: (searchKey: string | undefined) => void;
    searchPlaceholder?: string;
}

export const ContentBoxTableSideContent = ({ buttonLabel, onButtonClick, onSearchKeyUpdate, searchPlaceholder }: ContentBoxTableSideContentProps) => {
    const [searchKey, setSearchKey] = useState<string>("");
    const debouncedSearchKey = useDebounce(searchKey, 700);

    useEffect(() => {
        if (onSearchKeyUpdate) return onSearchKeyUpdate(debouncedSearchKey);
    }, [debouncedSearchKey])

    return (
        <DadinhoStack direction="row" alignItems="center" justifyContent="flex-end" spacing={1} minWidth="70%">
            {searchPlaceholder && 
                <DadinhoSearchText 
                    minWidth="50%" 
                    searchText={searchKey} 
                    placeholder={`Pesquise por ${searchPlaceholder}`} 
                    onChange={setSearchKey} 
                />
            }
            {buttonLabel && onButtonClick && <DadinhoButton onClick={onButtonClick} sx={{ minWidth: "200px" }} variant="contained">{buttonLabel}</DadinhoButton>}
        </DadinhoStack>
    );
}

export default ContentBoxTableSideContent;