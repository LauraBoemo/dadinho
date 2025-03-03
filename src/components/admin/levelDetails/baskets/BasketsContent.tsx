import { useState } from "react";
import { ContentBox } from "../../contentBox";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import { Baskets } from "../../../level";
import AddBasketDialog from "./AddBasketDialog";
import { DadinhoBox } from "../../../common";

interface BasketsContentProps {
    level: any;
}

export const BasketsContent = ({ level }: BasketsContentProps) => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Cestos Disponíveis" />
                } 
                content={
                    <DadinhoBox maxWidth="500px">
                        <Baskets baskets={level?.baskets} />
                    </DadinhoBox>
                }
                sideContent={
                    <ContentBoxTableSideContent onButtonClick={() => setShowDialog(true)} buttonLabel="Adicionar Cesto" />
                }
            />
            <AddBasketDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} levelId={level?.id} />
        </>
    );
}

export default BasketsContent;
