import { Outlet } from "react-router-dom";
import { DadinhoStack, NavigationBar } from "../../components";

export const AdminLayout = () => {

  return (
    <DadinhoStack direction="column">
        <NavigationBar />
        <Outlet />
    </DadinhoStack>
  );
};

export default AdminLayout;
