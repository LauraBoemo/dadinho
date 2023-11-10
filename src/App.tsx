import theme, { ThemeProvider } from "./theme";
import { DadinhoButton, DadinhoLogo } from "./components";
import { Google } from "./icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DadinhoLogo />
      <DadinhoButton variant="outlined" size="medium" startIcon={<Google width={20} />}>Continue com Google</DadinhoButton>
    </ThemeProvider>
  )
}

export default App;
