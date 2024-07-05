import { useState } from "react";
import { ContentBox } from "../../contentBox";
import { ContentBoxTableHeader, ContentBoxTableSideContent } from "../../users/contentBoxTableConfig";
import { DadinhoTypography } from "../../../common";

interface AnswersContentProps {
    level: any;
}

export const AnswersContent = ({ level }: AnswersContentProps) => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <ContentBox 
                title={
                    <ContentBoxTableHeader title="Respostas Disponíveis" />
                } 
                content={
                    <DadinhoTypography>
                        {level?.options.map((option: string) => {
                            return (
                                `${option} `
                            )
                        })}
                    </DadinhoTypography>
                }
                sideContent={
                    <></>
                }
            />
            {/* <AddElementDialog isOpen={showDialog} handleCloseDialog={() => setShowDialog(false)} levelId={level?.id} /> */}
        </>
    );
}

export default AnswersContent;
