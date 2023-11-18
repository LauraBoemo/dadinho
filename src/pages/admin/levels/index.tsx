import { useEffect } from "react";

import { LevelsView } from "../../../components/levels";
import { useAllLevels } from "../../../apis/levels/useAllLevels";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoDivider, DadinhoLoader, ConfigsHeader } from "../../../components";

export const LevelsConfigPage = () => {
    const [getLevels, levels, levelsLoading, levelsError] = useAllLevels();
    
    useEffect(() => {
        getLevels();
    }, []);

    return (
        <DadinhoStack direction="column" gap={1} height="100%">
            <ConfigsHeader title="Níveis" />
            <DadinhoStack direction="column" gap={1} justifyContent="space-around" height="100%">
                <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Níveis cadastrados
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <DadinhoBox minWidth="200px" minHeight="200px">
                        {!levelsLoading && levelsError && <DadinhoTypography textAlign="center" color="error">Não foi possível carregar os níveis</DadinhoTypography>}
                        {levelsLoading ? (
                                <DadinhoBox display="flex" sx={{ placeContent: "center" }}>
                                    <DadinhoLoader />
                                </DadinhoBox>
                            )  : (
                                <LevelsView levels={levels} />
                            )
                        }
                    </DadinhoBox>
                </DadinhoStack>
                {/* <DadinhoStack direction="column" gap={1}>
                    <DadinhoDivider>
                        <DadinhoTypography variant="h3">
                            Cadastrar novo item
                        </DadinhoTypography>
                    </DadinhoDivider>
                    <AddItemForm onItemSuccess={handleAddItem} />
                </DadinhoStack> */}
            </DadinhoStack>
        </DadinhoStack>
    );
}