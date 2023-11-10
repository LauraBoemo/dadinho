import { Dado } from "../icons";
import { useTheme } from "../theme"
import DadinhoBox from "./DadinhoBox"

export const DadinhoLogo = () => {
    const theme = useTheme();

    return (
        <DadinhoBox sx={{ display: "inline-block", borderRadius: "50px", border: `2px solid ${theme.palette.primary.main}`, px: 1.5, pt: 1.2, pb: 1.1}}>
            <Dado width={50}/>
        </DadinhoBox>
    )
}