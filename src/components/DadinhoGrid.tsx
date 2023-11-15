import { Grid, GridProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export type DadinhoGridProps = GridProps;

export const DadinhoGrid = styled(Grid)(({ theme }) => ({})) as typeof Grid;

export default DadinhoGrid;
