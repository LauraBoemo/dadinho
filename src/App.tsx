import AppRoutes from "./Routes";
import theme, { ThemeProvider } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./utils/ErrorProvider";
import { LoaderProvider } from "./utils/LoaderProvider";
import { NotificationProvider } from "./utils/NotificationProvider";

function App() {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <LoaderProvider>
          <NotificationProvider>
            <ThemeProvider theme={theme}>
              <AppRoutes />
            </ThemeProvider>
          </NotificationProvider>
        </LoaderProvider>
      </ErrorProvider>
    </BrowserRouter>
  )
}

export default App;
