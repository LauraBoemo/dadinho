import { Outlet } from "react-router-dom";
import { DadinhoStack } from "../../components";

export const CommonLayout = () => {

  return (
    <DadinhoStack height="100%" px={3} direction="column" justifyContent="space-between" textAlign="center">
        <Outlet />
    </DadinhoStack>
  );
};

export default CommonLayout;
