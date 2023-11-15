import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/app";
import { PATHS } from "./constants/Path";
import { LoginPage, RegisterPage, LevelsPage, LevelPage, AnswerPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LoginPage />} />c
        <Route path={PATHS.LOGIN} element={<LoginPage />} />
        <Route path={PATHS.REGISTER} element={<RegisterPage />} />
        <Route path={PATHS.LEVELS} element={<LevelsPage />} />
        <Route path={`${PATHS.LEVELS}/:id`} element={<LevelPage />} />
        <Route path={`${PATHS.ANSWER}/:status`} element={<AnswerPage />} />
        {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
