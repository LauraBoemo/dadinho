import AppRoutes from "./Routes";
import theme, { ThemeProvider } from "./theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
