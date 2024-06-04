import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useMemo, useState } from 'react';
import { DadinhoTablePaginationContainer } from '../../common';

interface StudentsProgressTableProps {
  content: any[];
}

const rowsPerPage = 5;

export default function StudentsProgressTable({ content }: StudentsProgressTableProps) {
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
              <TableCell align="right">Professor</TableCell>
              <TableCell align="right">Turma</TableCell>
              <TableCell align="right">Série</TableCell>
              <TableCell align="right">Nível Mais Alto</TableCell>
              <TableCell align="right">Média de Tempo por nível</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cappedRows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.teacher}</TableCell>
                <TableCell align="right">{row.class}</TableCell>
                <TableCell align="right">{row.serie}</TableCell>
                <TableCell align="right">{row.highestLevel}</TableCell>
                <TableCell align="right">{row.averageTime}min</TableCell>
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
