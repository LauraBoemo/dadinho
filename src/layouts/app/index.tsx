import { Outlet } from "react-router-dom";
import { DadinhoBox, DadinhoStack } from "../../components";
import { useTheme } from "../../theme";

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
      <DadinhoBox
        width="50%"
        height="100vh"
        maxWidth="500px"
        
        margin="auto"
        display="grid"

        alignItems="center"
      
        sx={{
          [theme.breakpoints.down('md')]: {
            width: "80%",
          }
        }}
      >
        <DadinhoStack 
            height="90%"
            maxHeight="630px"
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
