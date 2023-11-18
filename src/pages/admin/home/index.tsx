import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../../theme";
import { PATHS } from "../../../constants/Path";
import { DadinhoStack, DadinhoTypography, DadinhoBox, DadinhoIconButton, DadinhoButton, DadinhoDivider, DadinhoLoader } from "../../../components";

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useGetItems } from "../../../apis/items/useGetItems";
import { ItemsView } from "../../../components/items";
import { LevelsView } from "../../../components/levels";
import { useAllLevels } from "../../../apis/levels/useAllLevels";

interface ChildProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

const AdminPanel = ({ children, title, subtitle }: ChildProps) => {
    return (
        <DadinhoStack spacing={2.5} alignItems="center" textAlign="center">
            <DadinhoStack direction="column" spacing={0.5} width="100%">
                <DadinhoDivider>
                    <DadinhoTypography variant="h3">
                        {title}
                    </DadinhoTypography>
                </DadinhoDivider>
                {subtitle && <DadinhoTypography variant="h4">{subtitle}</DadinhoTypography>}
            </DadinhoStack>
            {children}
        </DadinhoStack>
    )
};

export const HomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [getLevels, levels, levelsLoading, levelsError] = useAllLevels();
    const [getItems, items, itemsLoading, itemsError] = useGetItems();
    
    useEffect(() => {
        getItems();
        getLevels();
    }, [])
    
    const goToConfigsPage = (page: "items" | "levels") => {
        navigate(`${PATHS.ADMIN}/${page}`);
    }

    const goToConfig = () => {
        navigate(PATHS.CONFIG);
    }

    return (
        <>
            <DadinhoStack direction="column" spacing="5px">
                <DadinhoTypography variant="h1">Boas vindas, doscente!</DadinhoTypography>
                <DadinhoTypography variant="h2" fontWeight={theme.typography.fontWeightLight}>O que procuras fazer desta vez? 😊</DadinhoTypography>
            </DadinhoStack>
            <DadinhoStack direction="column" spacing={5} height="400px" sx={{ overflow: "auto" }}>
                <AdminPanel title="Níveis cadastrados" subtitle="Selecione para ver detalhes e/ou adicionar informações">
                    {!levelsLoading && levelsError && <DadinhoTypography>Não foi possível carregar os níveis</DadinhoTypography>}
                    {levelsLoading ? <DadinhoLoader /> : <LevelsView levels={levels} />}
                    <DadinhoButton fullWidth onClick={() => goToConfigsPage("levels")}>Adicionar novo nível</DadinhoButton>
                </AdminPanel>
                <AdminPanel title="Itens cadastrados">
                    {!itemsLoading && itemsError && <DadinhoTypography>Não foi possível carregar os items</DadinhoTypography>}
                    {itemsLoading ? <DadinhoLoader /> : <ItemsView items={items} />}
                    <DadinhoButton fullWidth onClick={() => goToConfigsPage("items")}>Adicionar novo item</DadinhoButton>
                </AdminPanel>
            </DadinhoStack>
            <DadinhoBox display="flex" justifyContent="end">
                <DadinhoStack direction="row" spacing="10px">
                    <DadinhoIconButton onClick={goToConfig}>
                        <SettingsOutlinedIcon />
                    </DadinhoIconButton>
                </DadinhoStack>
            </DadinhoBox>
        </>
    );
}