import { Outlet } from "react-router-dom";
import { DadinhoBox, DadinhoStack } from "../../components";
import { useTheme } from "../../theme";
import { ToastContainer } from 'react-toastify';

const svgString = `
  <svg width="375" height="1178" viewBox="0 0 375 1178" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_188_1463)">
    <rect width="375" height="1178" rx="30" fill="white"/>
    <path d="M207 -1V-1C129.879 61.0766 123.316 176.208 192.883 246.647L197.786 251.611C257.109 311.676 261.108 406.976 207.026 471.8L155.237 533.875C117.587 579.004 129.382 647.127 180.014 676.97V676.97C232.373 707.831 242.834 779.168 201.54 823.763L148.998 880.503C98.7094 934.809 92.9976 1016.8 135.27 1077.55L269.876 1271.01" stroke="black" stroke-opacity="0.1" stroke-width="4"/>
    </g>
    <defs>
    <clipPath id="clip0_188_1463">
    <rect width="375" height="1178" rx="30" fill="white"/>
    </clipPath>
    </defs>
  </svg>
`;

const base64Svg = `data:image/svg+xml;base64,${btoa(svgString)}`;

const isTablet = window.innerWidth < 900;

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
                    width: isTablet ? '280px' : '500px',
                    height: '400vh',
                    backgroundImage: `url(${base64Svg})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'repeat-y',
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
