import AppRoutes from "./Routes";
import theme, { ThemeProvider } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./utils/ErrorProvider";
import { LoaderProvider } from "./utils/LoaderProvider";

function App() {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <LoaderProvider>
            <ThemeProvider theme={theme}>
              <AppRoutes />
            </ThemeProvider>
        </LoaderProvider>
      </ErrorProvider>
    </BrowserRouter>
  )
}

export default App;
