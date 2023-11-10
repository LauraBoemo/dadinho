import { Routes, Route } from "react-router-dom";
import { PATHS } from "./constants/Path";
import { LoginPage } from "./pages/login";
import AppLayout from "./layouts/app";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LoginPage />} />
        <Route path={PATHS.LOGIN} element={<LoginPage />} />
        {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
