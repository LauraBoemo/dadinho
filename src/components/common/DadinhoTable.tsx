import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const rows = [
  { nome: 'Laura Boemo', turma: 2, nivelAtual: 159, tempoMedio: 6.0 },
  { nome: 'Laura Boemo', turma: 2, nivelAtual: 159, tempoMedio: 6.0 },
  { nome: 'Laura Boemo', turma: 2, nivelAtual: 159, tempoMedio: 6.0 },
  { nome: 'Laura Boemo', turma: 2, nivelAtual: 159, tempoMedio: 6.0 },
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Turma</TableCell>
            <TableCell align="right">Nível Atual</TableCell>
            <TableCell align="right">Tempo Médio </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row?.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.nome}
              </TableCell>
              <TableCell align="right">{row?.turma}</TableCell>
              <TableCell align="right">{row?.nivelAtual}</TableCell>
              <TableCell align="right">{row?.tempoMedio} min</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
