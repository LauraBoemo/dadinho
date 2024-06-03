import { useState } from "react";
import { ContentBox } from "../../contentBox";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import { Recipe } from "../../../level";
import AddElementDialog from "./AddElementDialog";

interface ElementsContentProps {
    level: any;
}

export const ElementsContent = ({ level }: ElementsContentProps) => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Elementos exigidos" />
                } 
                content={
                    <Recipe recipe={level?.recipe} />
                }
                sideContent={
                    <ContentBoxTableSideContent onButtonClick={() => setShowDialog(true)} buttonLabel="Adicionar Elemento" />
                }
            />
            <AddElementDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} levelId={level?.id} />
        </>
    );
}

export default ElementsContent;
