import { useEffect } from 'react';

import { useLevel } from '../../../apis/level/useLevel';

import { DadinhoStack, DadinhoTypography, DadinhoDivider, ConfigsHeader, DadinhoLoader, Recipe, Baskets, DadinhoBox, DadinhoButton } from "../../../components";
import { PATHS } from '../../../constants/Path';
import { useNavigate, useParams } from 'react-router-dom';

export const LevelDetailsConfigPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [getLevel, level, levelProgress, levelError] = useLevel();

    useEffect(() => {
        getLevel({ id: id })
    }, []);

    const goToAddPage = (page: PATHS.BASKETS_CONFIG | PATHS.RECIPES_CONFIG, id: string | undefined) => {
        navigate(`${PATHS.ADMIN}/${page}/${id}`)
    }

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            {!levelProgress && levelError && <DadinhoTypography variant="h3" color="error">Não foi possível carregar os detalhes do nível</DadinhoTypography>}
            {levelProgress ? (
                <DadinhoBox alignItems="center" justifyContent="center">
                    <DadinhoLoader /> 
                </DadinhoBox>
                ) : (
                <>
                    <ConfigsHeader title={`${level?.title} - ${level?.icon}`} />
                    <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                        <DadinhoStack direction="column" gap={1}>
                            <DadinhoDivider>
                                <DadinhoTypography variant="h3">
                                    Elementos da Receita
                                </DadinhoTypography>
                            </DadinhoDivider>
                            <Recipe recipe={level?.recipe} />
                            <DadinhoButton onClick={() => goToAddPage(PATHS.RECIPES_CONFIG, id)}>Adicionar elemento</DadinhoButton>
                        </DadinhoStack>
                        <DadinhoStack direction="column" gap={1}>
                            <DadinhoDivider>
                                <DadinhoTypography variant="h3">
                                    Cestos
                                </DadinhoTypography>
                            </DadinhoDivider>
                            <Baskets baskets={level?.baskets} />
                            <DadinhoButton onClick={() => goToAddPage(PATHS.BASKETS_CONFIG, id)}>Adicionar cesto</DadinhoButton>
                        </DadinhoStack>
                        <DadinhoStack direction="column" gap={1}>
                            <DadinhoDivider>
                                <DadinhoTypography variant="h3">
                                    Opções disponíveis
                                </DadinhoTypography>
                            </DadinhoDivider>
                            <DadinhoBox>
                                <DadinhoTypography>{level?.options.map((option: string) => {
                                    return (
                                        `${option} `
                                    )
                                })}</DadinhoTypography>
                            </DadinhoBox>
                        </DadinhoStack>
                    </DadinhoStack>
                </>
            )}
        </DadinhoStack>
    );
}