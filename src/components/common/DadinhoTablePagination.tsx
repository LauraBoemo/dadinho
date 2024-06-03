import React from "react";
import DadinhoStack from "./DadinhoStack";
import DadinhoTypography from "./DadinhoTypography";
import DadinhoIconButton from "./DadinhoIconButton";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface DadinhoTablePaginationProps {
  count: number;
  page: number;
  onChange: (event: any, page: number) => void;
}

export const DadinhoTablePagination: React.FC<DadinhoTablePaginationProps> = ({ count, page, onChange }) => {
  return (
    <DadinhoStack
      direction="row"
      px={0.5}
      spacing={1}
      alignItems="center"
    >
      <DadinhoIconButton size="small" onClick={(e) => onChange(e, page - 1)} disabled={page <= 1}>
        <ChevronLeft />
      </DadinhoIconButton>
      <DadinhoTypography fontWeight="fontWeightMedium">
        {page}/{count}
      </DadinhoTypography>
      <DadinhoIconButton size="small" onClick={(e) => onChange(e, page + 1)} disabled={page >= count}>
        <ChevronRight />
      </DadinhoIconButton>
    </DadinhoStack>
  );
};

export default DadinhoTablePagination;
