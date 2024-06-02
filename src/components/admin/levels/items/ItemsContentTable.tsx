import { useState } from "react";
import { ContentBox } from "../../..";
import BasicTable from "../../../common/DadinhoTable";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import { AddItemDialog } from "./AddItemDialog";

export const ItemsContentTable = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Itens Cadastrados" />
                } 
                content={
                    <BasicTable />
                }
                sideContent={
                    <ContentBoxTableSideContent onButtonClick={() => setShowDialog(true)} buttonLabel="Adicionar Item" searchPlaceholder="Item" />
                }
            />
            <AddItemDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} />
        </>
    );
}

export default ItemsContentTable;
