import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useLevel } from '../../../apis/level/useLevel';
import { DadinhoStack, DadinhoTypography, ConfigsHeader, DadinhoLoader, DadinhoBox, AnswersContent, BasketsContent, ElementsContent } from "../../../components";


export const LevelDetailsConfigPage = () => {
    const { id } = useParams();

    const [getLevel, level, levelProgress, levelError] = useLevel();

    useEffect(() => {
        getLevel({ id: id })
    }, []);

    return (
        <DadinhoStack direction="column" gap={1} ml={2} height="100%">
            {!levelProgress && levelError && <DadinhoTypography variant="h3" color="error">Não foi possível carregar os detalhes do nível</DadinhoTypography>}
            {levelProgress ? (
                <DadinhoBox alignItems="center" justifyContent="center">
                    <DadinhoLoader /> 
                </DadinhoBox>
                ) : (
                <>
                    <ConfigsHeader title={`${level?.title} - ${level?.icon}`} />
                    <ElementsContent level={level} />
                    <BasketsContent level={level} />
                    <AnswersContent level={level} />
                </>
            )}
        </DadinhoStack>
    );
}