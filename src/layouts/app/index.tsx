import { Outlet } from "react-router-dom";
import { DadinhoBox, DadinhoStack } from "../../components";
import { useTheme } from "../../theme";
import { ToastContainer } from 'react-toastify';

const isTablet = window.innerWidth < 900;

export const AppLayout = () => {
  const theme = useTheme();

  return (
    // TODO Need to find better ways to declare these styles
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
        maxWidth={isTablet ? "500px" : "60vw"}
        px={!isTablet ? 4 : undefined}
        
        margin="auto"
        display="grid"

        alignItems="center"
      >
        <DadinhoStack 
            height="90vh"
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
