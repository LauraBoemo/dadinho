import DadinhoStack from "./DadinhoStack";
import DadinhoTablePagination from "./DadinhoTablePagination";

export interface DadinhoTablePaginationContainerTypes {
  totalCount: number;
  onPageChange: (_event: any, page: number) => void;
  page: number;
  rowsPerPage: number;
}

export const DadinhoTablePaginationContainer = ({
  totalCount,
  onPageChange,
  page,
  rowsPerPage,
}: DadinhoTablePaginationContainerTypes) => {
  return (
    <DadinhoStack pt={1.5} direction="row" justifyContent="center">
      <DadinhoTablePagination count={Math.ceil(totalCount / rowsPerPage)} page={page} onChange={onPageChange} />
    </DadinhoStack>
  );
};

export default DadinhoTablePaginationContainer;
