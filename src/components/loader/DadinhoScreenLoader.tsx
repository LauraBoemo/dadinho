import React from "react";
import { styled } from "@mui/material/styles";
import { DadinhoBox } from "../DadinhoBox";
import { DadinhoStack } from "../DadinhoStack";
import { CircularProgress } from "@mui/material";

interface LoaderBoxProps {
  layered: boolean;
}

const LoaderBox = styled(({ layered, ...props }: LoaderBoxProps) => <DadinhoBox {...props} />)(({ theme, layered }) => ({
  height: "100%",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999999,
  ...(layered && {
    opacity: 0.8,
    background: theme.palette.secondary.light,
  }),
}));

export interface DadinhoScreenLoaderProps {
  layered?: boolean;
  loaderWidth?: number;
  loaderHeight?: number;
  loaderImagePath?: string;
}

export const DadinhoScreenLoader: React.FC<DadinhoScreenLoaderProps> = ({ layered }) => {
  return (
    // @ts-ignore
    <LoaderBox layered={!!layered}>
      <DadinhoStack sx={{ minHeight: "100vh" }} direction="column" alignItems="center" justifyContent="center">
        <CircularProgress />
      </DadinhoStack>
    </LoaderBox>
  );
};

export default DadinhoScreenLoader;
