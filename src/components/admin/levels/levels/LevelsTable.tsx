import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useMemo, useState } from 'react';
import { DadinhoTablePaginationContainer } from '../../../common';
import { useTheme } from "../../../../theme";
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../../constants/Path';

interface LevelsTableProps {
  content: any[];
}

const rowsPerPage = 5;

export default function LevelsTable({ content }: LevelsTableProps) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const handleChangePage = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
    };

    const cappedRows = useMemo(() => {
      if (content?.length) return content?.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }, [content, page, rowsPerPage]);
    
  return (
    <>
      <TableContainer sx={{ minHeight: 320 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Ícone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cappedRows?.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => navigate(`${PATHS.ADMIN}${PATHS.LEVELS}/${row?.id}`)}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 }, 
                  "&:hover": { backgroundColor: theme.palette.primary.dark, cursor: "pointer" } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.icon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DadinhoTablePaginationContainer
          totalCount={content?.length}
          onPageChange={handleChangePage}
          page={page}
          rowsPerPage={5}
      />
    </>
  );
}
