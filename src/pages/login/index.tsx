import { Google } from "../../icons";
import { DadinhoLogo, DadinhoButton, DadinhoTypography } from "../../components";

export const LoginPage = () => {
    return (
        <>
            <DadinhoLogo displayName={true} />
            <DadinhoButton variant="outlined" size="medium" startIcon={<Google width={20} />}>Continue com Google</DadinhoButton>
            <DadinhoTypography variant="h4">dadinho© 2023, Brasil</DadinhoTypography>
        </>
    );
}

export default LoginPage;