import { Outlet } from "react-router-dom";
import { DadinhoBox, DadinhoStack } from "../../components";
import { useTheme } from "../../theme";
import { ToastContainer } from 'react-toastify';

const svgString = `
<svg width="auto" height="auto" viewBox="0 0 375 1686" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_159_1466)">
    <rect width="375" height="1686" fill="white"/>
    <path d="M253.419 1682.59L230.569 1654.49C173.702 1584.58 160.796 1488.7 197.151 1406.23L271.688 1237.17C317.55 1133.14 284.132 1011.21 191.64 945.098L41.9198 838.086" stroke="black" stroke-opacity="0.1" stroke-width="4"/>
    <path d="M253.419 -0.764892L230.569 27.3282C173.702 97.2431 160.796 193.123 197.151 275.587L271.688 444.652C317.55 548.68 284.132 670.614 191.64 736.723L41.9198 843.735" stroke="black" stroke-opacity="0.1" stroke-width="4"/>
  </g>
  <defs>
    <clipPath id="clip0_159_1466">
      <rect width="375" height="1686" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;

const base64Svg = `data:image/svg+xml;base64,${btoa(svgString)}`;

export const AppLevelLayout = () => {
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
            height="100vh"
            direction="column"
            justifyContent="space-between"
        >
            <DadinhoBox sx={{ position: 'relative', minHeight: '100vh', overflowY: 'auto' }}>
            <DadinhoBox
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${base64Svg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    zIndex: -1,
                }}
            />
                <Outlet />
            </DadinhoBox>
        </DadinhoStack>
      </DadinhoBox>
    </DadinhoBox>
  );
};

export default AppLevelLayout;
