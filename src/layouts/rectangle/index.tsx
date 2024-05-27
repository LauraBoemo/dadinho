import { Outlet } from "react-router-dom";
import { DadinhoBox, DadinhoStack } from "../../components";

const svgString = `
    <svg width="375" height="812" viewBox="0 0 375 812" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_195_1469)">
        <rect width="375" height="812" rx="50" fill="white"/>
        <path opacity="0.19" d="M1029.78 761.473L673.01 -570L401.208 -98.5832L202.55 265.801L-387.174 1305.38L15.1319 2806.81L1029.78 761.473Z" fill="#DFDFDF"/>
        </g>
        <defs>
        <clipPath id="clip0_195_1469">
        <rect width="375" height="812" rx="50" fill="white"/>
        </clipPath>
        </defs>
    </svg>
`;

const base64Svg = `data:image/svg+xml;base64,${btoa(svgString)}`;

export const RectangleLayout = () => {

  return (
    <DadinhoBox sx={{ position: 'relative', minHeight: '100vh', overflowY: 'auto' }}>
    <DadinhoBox
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "110%",
            height: "100%",
            backgroundImage: `url(${base64Svg})`,
            backgroundSize: 'auto',
            backgroundPosition: 'top',
            zIndex: -1,
        }}
    />
        <DadinhoStack height="80%" px={3} direction="column" justifyContent="space-between" textAlign="center">
            <Outlet />
        </DadinhoStack>
    </DadinhoBox>
  );
};

export default RectangleLayout;
