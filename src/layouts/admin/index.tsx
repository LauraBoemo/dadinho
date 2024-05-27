import { Outlet } from "react-router-dom";
import { DadinhoStack, NavigationBar } from "../../components";

export const AdminLayout = () => {

  return (
    <DadinhoStack height="100%" px={3} direction="column" justifyContent="space-between" textAlign="center">
        <NavigationBar />
        <Outlet />
    </DadinhoStack>
  );
};

export default AdminLayout;
