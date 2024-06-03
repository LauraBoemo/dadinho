import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/app";
import { PATHS } from "./constants/Path";
import { adminVerify } from "./apis/utilsStorage";

import { LoginPage, RegisterPage, LevelsPage, LevelPage as UserLevelsPage, AnswerPage, ConfigPage } from "./pages";
import { BasketsConfigPage, DataPage, LevelDetailsConfigPage, LevelsPage as AdminLevelsPage, RecipesConfigPage, UsersPage } from "./pages/admin";
import AccessInstructionsPage from "./pages/accessInstructions";
import { MapLayout } from "./layouts/map";
import CommonLayout from "./layouts/common";
import AdminLayout from "./layouts/admin";

const AppRoutes = () => {
  const isAdmin = adminVerify();

  return (
    <Routes>
      <Route element={<AppLayout />}>
          <Route index element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={`${PATHS.LEVELS}/:id`} element={<UserLevelsPage />} />
          <Route path={`${PATHS.ANSWER}/:status`} element={<AnswerPage />} />
          <Route element={<CommonLayout />}>
            <>
              <Route path={PATHS.LOGIN} element={<LoginPage />} />
              <Route path={PATHS.ACCESS_INSTRUCTIONS} element={<AccessInstructionsPage />} />
              <Route path={PATHS.CONFIG} element={<ConfigPage />} /> 
            </>
          </Route>
          {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
          <Route element={<AdminLayout />}>
            {isAdmin && (
                <>
                  <Route path={`${PATHS.ADMIN}/${PATHS.DATA}`} element={<DataPage />} />
                  <Route path={`${PATHS.ADMIN}/${PATHS.USERS}`} element={<UsersPage />} />
                  <Route path={`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}`} element={<AdminLevelsPage />} />
                  <Route path={`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}/:id`} element={<LevelDetailsConfigPage />} />
                  <Route path={`${PATHS.ADMIN}/${PATHS.BASKETS_CONFIG}/:id`} element={<BasketsConfigPage />} />
                  <Route path={`${PATHS.ADMIN}/${PATHS.RECIPES_CONFIG}/:id`} element={<RecipesConfigPage />} />
                </>
              )
            }
          </Route>
          <Route element={<MapLayout />}>
              {!isAdmin && (
                <Route path={PATHS.LEVELS} element={<LevelsPage />} />
              )}
          </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
