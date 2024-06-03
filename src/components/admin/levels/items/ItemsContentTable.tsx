import { useEffect, useMemo, useState } from "react";
import { ContentBox, DadinhoBox, DadinhoLoader, DadinhoTypography } from "../../..";
import AddItemDialog from "./AddItemDialog";
import ItemsTable from "./ItemsTable";
import { useGetItems } from "../../../../apis/items/useGetItems";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";

export const ItemsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [searchKey, setSearchKey] = useState<string>();

    const [getItems, items, itemsLoading, itemsError] = useGetItems();

    useEffect(() => {
        getItems();
    }, []);

    const rows = useMemo(() => {
        if (!searchKey || searchKey === "") return items;
      
        return items?.filter((level: { name: string; }) => 
          level.name.toLowerCase().includes(searchKey.toLowerCase())
        );
      }, [items, searchKey]);

    return (
        <>
            {!itemsLoading && itemsError && 
                <DadinhoTypography textAlign="center" color="error">
                    Não foi possível carregar os níveis
                </DadinhoTypography>
            }
            {itemsLoading && 
                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                    <DadinhoLoader />
                </DadinhoBox>
            }
            {!itemsLoading && !itemsError &&
                <>
                    <ContentBox 
                        title={
                            <ContentBoxTableHeader title="Itens Cadastrados" />
                        } 
                        content={
                            <ItemsTable content={rows} />
                        }
                        sideContent={
                            <ContentBoxTableSideContent
                                onSearchKeyUpdate={(searchKeyUpdate) => setSearchKey(searchKeyUpdate)} 
                                onButtonClick={() => setShowDialog(true)} 
                                buttonLabel="Adicionar Item" 
                                searchPlaceholder="Item" 
                            />
                        }
                    />
                    <AddItemDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
                </>
             }
        </>
    );
}

export default ItemsContentTable;
