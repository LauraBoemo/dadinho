import { useTheme } from "../../../theme";
import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from "recharts";
import { DadinhoStack } from "../../common";

export const DadinhoBarChart = (data: any) => {
  const theme = useTheme();

  return (
    <DadinhoStack marginLeft={-4} alignItems="center">
      <BarChart style={{ fontFamily: theme.typography.fontFamily }} width={850} height={250} data={data.data}>
          <Tooltip />
        <CartesianGrid  />
          <XAxis dataKey="Nível" />
          <YAxis />
          <Bar dataKey="Alunos" fill={theme.palette.primary.dark} />
      </BarChart>
    </DadinhoStack>
    )
}

export default DadinhoBarChart;