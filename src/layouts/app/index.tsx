import { Outlet } from "react-router-dom";
import { DadinhoBox } from "../../components";

export const AppLayout = () => {
  return (
    <DadinhoBox sx={{ backgroundColor: "grey.50", overflowY: "auto" }} height="100vh">
      <Outlet />
    </DadinhoBox>
  );
};

export default AppLayout;
