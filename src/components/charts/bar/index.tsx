import { useTheme } from "../../../theme";
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from "recharts";
import { DadinhoBox } from "../../common";

const mockedData = [
    {
      "Nível": "Nível 1",
      "Alunos": 22,
    },
    {
      "Nível": "Nível 2",
      "Alunos": 12,
    },
    {
      "Nível": "Nível 3",
      "Alunos": 13,
    },
    {
      "Nível": "Nível 4",
      "Alunos": 15,
    },
    {
      "Nível": "Nível 5",
      "Alunos": 10,
    },
    {
      "Nível": "Nível 6",
      "Alunos": 15,
    },
    {
      "Nível": "Nível 7",
      "Alunos": 19,
    },
    {
      "Nível": "Nível 8",
      "Alunos": 15,
    },
    {
      "Nível": "Nível 9",
      "Alunos": 10,
    },
    {
      "Nível": "Nível 10",
      "Alunos": 15,
    },
    {
      "Nível": "Nível 11",
      "Alunos": 19,
    },
    {
      "Nível": "Nível 12",
      "Alunos": 15,
    },
    {
      "Nível": "Nível 13",
      "Alunos": 10,
    },
    {
      "Nível": "Nível 14",
      "Alunos": 15,
    },
    {
      "Nível": "Nível 15",
      "Alunos": 19,
    }
]

export const DadinhoBarChart = () => {
  const theme = useTheme();

  return (
    <DadinhoBox marginLeft={-4}>
      <BarChart style={{ fontFamily: theme.typography.fontFamily }} width={550} height={250} data={mockedData}>
          <Tooltip />
        <CartesianGrid  />
          <XAxis dataKey="Nível" />
          <YAxis />
          <Bar dataKey="Alunos" fill={theme.palette.primary.dark} />
      </BarChart>
    </DadinhoBox>
    )
}

export default DadinhoBarChart;