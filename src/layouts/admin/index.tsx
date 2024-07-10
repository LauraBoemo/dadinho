import { Outlet } from "react-router-dom";
import { DadinhoBox, NavigationBar } from "../../components";

export const AdminLayout = () => {

  return (
    <>
        <NavigationBar />
        <DadinhoBox 
          position="relative" 
          left="200px" 
          top="0" 
          width="85%" 
          maxWidth="1400px" 
          marginRight="auto" 
          maxHeight="90vh" 
          overflow="overlay"
        >
          <Outlet />
        </DadinhoBox>
    </>
  );
};

export default AdminLayout;
