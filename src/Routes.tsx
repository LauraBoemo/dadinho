import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/app";
import { PATHS } from "./constants/Path";
import { adminVerify } from "./apis/utilsStorage";

import { LoginPage, LevelsPage, LevelPage as UserLevelsPage, AnswerPage, ConfigPage } from "./pages";
import { DataPage, LevelDetailsConfigPage, LevelsPage as AdminLevelsPage, UsersPage, AdminConfigPage } from "./pages/admin";
import AccessInstructionsPage from "./pages/accessInstructions";
import { MapLayout } from "./layouts/map";
import CommonLayout from "./layouts/common";
import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user/UserLayout";

const AppRoutes = () => {
  const isAdmin = adminVerify();

  return (
    <Routes>
      <Route element={<AppLayout />}>
          <Route element={<UserLayout />}>
            <Route index element={<LoginPage />} />
            <Route path={`${PATHS.LEVELS}/:id`} element={<UserLevelsPage />} />
            <Route path={`${PATHS.ANSWER}/:status`} element={<AnswerPage />} />
            <Route element={<CommonLayout />}>
              <>
                <Route path={PATHS.LOGIN} element={<LoginPage />} />
                <Route path={PATHS.ACCESS_INSTRUCTIONS} element={<AccessInstructionsPage />} />
                <Route path={PATHS.CONFIG} element={<ConfigPage />} /> 
              </>
            </Route>
            <Route element={<MapLayout />}>
                {!isAdmin && (
                  <Route path={PATHS.LEVELS} element={<LevelsPage />} />
                )}
            </Route>
            {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
          </Route>
          {isAdmin && (
            <Route element={<AdminLayout />}>
                  <>
                    <Route path={`${PATHS.ADMIN}/${PATHS.DATA}`} element={<DataPage />} />
                    <Route path={`${PATHS.ADMIN}/${PATHS.CONFIG}`} element={<AdminConfigPage />} />
                    <Route path={`${PATHS.ADMIN}/${PATHS.USERS}`} element={<UsersPage />} />
                    <Route path={`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}`} element={<AdminLevelsPage />} />
                    <Route path={`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}/:id`} element={<LevelDetailsConfigPage />} />
                  </>
            </Route>
            )
          }
      </Route>
    </Routes>
  );
};

export default AppRoutes;
