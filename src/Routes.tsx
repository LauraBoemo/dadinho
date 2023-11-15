import { Routes, Route } from "react-router-dom";
import { PATHS } from "./constants/Path";
import AppLayout from "./layouts/app";
import { LoginPage, LevelsPage, LevelPage } from "./pages";
import AnswerPage from "./pages/answer";
import RegisterPage from "./pages/register";
import { Suspense } from "react";
import DadinhoScreenLoader from "./components/loader/DadinhoScreenLoader";

const AppRoutes = () => {
  return (
    <Suspense fallback={<DadinhoScreenLoader layered />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LoginPage />} />c
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={PATHS.LEVELS} element={<LevelsPage />} />
          <Route path={`${PATHS.LEVELS}/:id`} element={<LevelPage />} />
          <Route path={`${PATHS.ANSWER}/:status`} element={<AnswerPage />} />
          {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
