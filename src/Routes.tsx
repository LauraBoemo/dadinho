import { Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/app";
import { PATHS } from "./constants/Path";
import { adminVerify } from "./apis/utilsStorage";

import { LoginPage, RegisterPage, LevelsPage, LevelPage, AnswerPage, ConfigPage } from "./pages";
import { BasketsConfigPage, HomePage, ItemsConfigPage, LevelDetailsConfigPage, LevelsConfigPage, RecipesConfigPage } from "./pages/admin";
import AccessInstructionsPage from "./pages/accessInstructions";
import { MapLayout } from "./layouts/map";
import RectangleLayout from "./layouts/rectangle";

const AppRoutes = () => {
  const isAdmin = adminVerify();

  return (
    <Routes>
      <Route element={<AppLayout />}>
          <Route index element={<LoginPage />} />
          <Route path={PATHS.REGISTER} element={<RegisterPage />} />
          <Route path={`${PATHS.LEVELS}/:id`} element={<LevelPage />} />
          <Route path={`${PATHS.ANSWER}/:status`} element={<AnswerPage />} />
          {/* <Route path="*" element={<Error errorCode={ERROR_CODES.PAGE_NOT_FOUND} />} /> */}
          {isAdmin && (
              <>
                <Route path={`${PATHS.ADMIN}/${PATHS.HOME}`} element={<HomePage />} />
                <Route path={`${PATHS.ADMIN}/${PATHS.ITEMS_CONFIG}`} element={<ItemsConfigPage />} />
                <Route path={`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}`} element={<LevelsConfigPage />} />
                <Route path={`${PATHS.ADMIN}/${PATHS.LEVELS_CONFIG}/:id`} element={<LevelDetailsConfigPage />} />
                <Route path={`${PATHS.ADMIN}/${PATHS.BASKETS_CONFIG}/:id`} element={<BasketsConfigPage />} />
                <Route path={`${PATHS.ADMIN}/${PATHS.RECIPES_CONFIG}/:id`} element={<RecipesConfigPage />} />
              </>
            )
          }
          <Route element={<RectangleLayout />}>
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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
