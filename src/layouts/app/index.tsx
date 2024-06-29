import { Outlet } from "react-router-dom";
import { DadinhoBox, DadinhoStack } from "../../components";
import { useTheme } from "../../theme";
import { ToastContainer } from 'react-toastify';

export const AppLayout = () => {
  const theme = useTheme();

  return (
    <DadinhoBox 
      height="97vh"
      borderRadius="10px"
      border={`2px solid ${theme.palette.primary.main}`}
      sx={{
        overflowY: "hidden",
        overflowX: "hidden", 
      }}
    >
      <ToastContainer 
        icon={false} 
        style={{ fontFamily: 'Poppins' }}
      />
      <DadinhoBox
        height="100vh"
        margin="auto"
        display="grid"
        
        alignItems="center"
      >
        <DadinhoStack 
            height="90vh"
            alignItems="center"
            direction="column"
            justifyContent="space-between"
        >
          <Outlet />
        </DadinhoStack>
      </DadinhoBox>
    </DadinhoBox>
  );
};

export default AppLayout;
