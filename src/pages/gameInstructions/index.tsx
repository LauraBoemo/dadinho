import { useTheme } from "../../theme";

import { DadinhoStack, DadinhoFooter, DadinhoHeader, DadinhoTypography, DadinhoButton, DadinhoBox, Basket } from "../../components";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const GameInstructionsPage = () => {
    const theme = useTheme();
    
    return (
        <DadinhoStack maxWidth="500px" overflow="overlay">
            <DadinhoHeader pageTitle="Como Jogar?" backButtonCustomIcon={<QuestionMarkIcon />} backButton />
            <DadinhoStack direction="column" textAlign="left" my={2}>
                <DadinhoTypography variant="h2" textAlign="center">
                    O Dadinho tem 4 regras simples <br/> muito importantes para o seu sucesso!
                </DadinhoTypography>
                <DadinhoStack bgcolor={theme.palette.primary.light} p={1} my={2} mt={3} borderRadius='10px'>
                    <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>1º.</DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={2}>
                        O "Meu Cesto" é um cesto IMAGINÁRIO, é o cesto que você está montando com os seus comandos!
                    </DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={2}>
                        Por exemplo, para acertar esse pedido...
                    </DadinhoTypography>
                    <DadinhoBox 
                        p={1.5}
                        mt={2} 
                        width="440px" 
                        height="10vh" 
                        textAlign="center"
                        bgcolor={theme.palette.primary.light}  
                        border="2px solid" 
                        borderRadius="10px"
                    >
                    <DadinhoTypography variant="h3">Monte uma sequência de comandos que agrupe os seguintes itens...</DadinhoTypography>
                    <DadinhoBox sx={{ mt: 1, textAlign: "-webkit-center" }}>
                        <Basket items={[{ id: 1, icon: "🍎", name: "Maçã" }, { id: 2, icon: "🍌", name: "Banana"}]} index={1} customHeight="auto" noTitle customBg={"white"} />
                    </DadinhoBox>
                    </DadinhoBox>
                    <DadinhoTypography variant="h3" mt={6}>
                        ... seus comandos devem montar o seguinte "Meu Cesto"...
                    </DadinhoTypography>
                    <DadinhoBox mt={2} alignSelf="center">
                        <Basket items={[{ id: 1, icon: "🍎", name: "Maçã" }, { id: 2, icon: "🍌", name: "Banana"}]} index={1} title="Meu Cesto" />
                    </DadinhoBox>
                    <DadinhoTypography variant="h3" mt={2}>
                        ... usando os "Cestos de Itens" e os comandos disponíveis.
                    </DadinhoTypography>
                </DadinhoStack>
                <DadinhoStack bgcolor={theme.palette.primary.light} p={1} my={2} borderRadius='10px'>
                    <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>2º.</DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={2}>
                        A ordem dos comandos sempre deve ser...
                    </DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={1} fontWeight={theme.typography.fontWeightMedium}>
                        [PEGUE/REMOVA] [ALGO] [DE ALGUM LUGAR]
                    </DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={1}>
                        ... por exemplo...
                    </DadinhoTypography>
                    <DadinhoStack
                            direction="row"
                            flexWrap="wrap"
                            gap={0.5}
                            height="fit-content" 
                            width="100%"
                            justifyContent="center"
                            mt={1}
                        >
                            <DadinhoButton
                                size="small"
                                sx={{ backgroundColor: theme.palette.primary.contrastText}}
                            >
                                <DadinhoTypography variant="h3" py={0.5}>
                                    Pegue
                                </DadinhoTypography>
                            </DadinhoButton>
                            <DadinhoButton
                                size="small"
                                sx={{ backgroundColor: theme.palette.primary.contrastText}}
                            >
                                <DadinhoTypography variant="h3" py={0.5}>
                                    uma 🍎
                                </DadinhoTypography>
                            </DadinhoButton>
                            <DadinhoButton
                                size="small"
                                sx={{ backgroundColor: theme.palette.primary.contrastText}}
                            >
                                <DadinhoTypography variant="h3" py={0.5}>
                                    do Cesto 1
                                </DadinhoTypography>
                            </DadinhoButton>
                    </DadinhoStack>  
                </DadinhoStack>
                <DadinhoStack bgcolor={theme.palette.primary.light} p={1} my={2} borderRadius='10px'>
                    <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>3º.</DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={2}>
                        Você só REMOVE itens do "Meu Cesto", por exemplo...
                    </DadinhoTypography>
                    <DadinhoStack
                            direction="row"
                            flexWrap="wrap"
                            gap={0.5}
                            height="fit-content" 
                            width="100%"
                            justifyContent="center"
                            mt={1}
                        >
                            <DadinhoButton
                                size="small"
                                sx={{ backgroundColor: theme.palette.primary.contrastText}}
                            >
                                <DadinhoTypography variant="h3" py={0.5}>
                                    Remova
                                </DadinhoTypography>
                            </DadinhoButton>
                            <DadinhoButton
                                size="small"
                                sx={{ backgroundColor: theme.palette.primary.contrastText}}
                            >
                                <DadinhoTypography variant="h3" py={0.5}>
                                    uma 🍎
                                </DadinhoTypography>
                            </DadinhoButton>
                            <DadinhoButton
                                size="small"
                                sx={{ backgroundColor: theme.palette.primary.contrastText}}
                            >
                                <DadinhoTypography variant="h3" py={0.5}>
                                    do Meu Cesto
                                </DadinhoTypography>
                            </DadinhoButton>
                    </DadinhoStack>  
                </DadinhoStack>
                <DadinhoStack bgcolor={theme.palette.primary.light} p={1} my={2} borderRadius='10px'>
                    <DadinhoTypography variant="h1" fontWeight={theme.typography.fontWeightMedium}>4º.</DadinhoTypography>
                    <DadinhoTypography variant="h3" mt={2}>
                        Você NÃO precisa usar todas as opções de comandos!
                    </DadinhoTypography>
                </DadinhoStack>
            </DadinhoStack>
            <DadinhoFooter />
        </DadinhoStack>
    );
}

export default GameInstructionsPage;