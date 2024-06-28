import { Outlet } from "react-router-dom";
import { DadinhoStack } from "../../components";
import { useTheme } from "../../theme";

export const CommonLayout = () => {
  const theme = useTheme();

  return (
    <DadinhoStack height="100%" px={3} direction="column" justifyContent="space-between" textAlign="center" alignItems="center" sx={{ 
      [theme.breakpoints.down('md')]: {
          pl: 2,
        },
  }}>
        <Outlet />
    </DadinhoStack>
  );
};

export default CommonLayout;
