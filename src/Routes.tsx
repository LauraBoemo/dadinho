import { Routes, Route } from "react-router-dom";
import { PATHS } from "./constants/Path";
import AppLayout from "./layouts/app";
import { LoginPage, LevelsPage, LevelPage } from "./pages";
import AnswerPage from "./pages/answer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LoginPage />} />
        <Route path={PATHS.LOGIN} element={<LoginPage />} />
        <Route path={PATHS.LEVELS} element={<LevelsPage />} />
        <Route path={`${PATHS.LEVELS}/:id`} element={<LevelPage />} />
        <Route path={`${PATHS.ANSWER}/:status`} element={<AnswerPage />} />
        {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
