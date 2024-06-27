import DadinhoBox from "./DadinhoBox";
import DadinhoChip from "./DadinhoChip";
import DadinhoListItem from "./DadinhoListItem";
import DadinhoStack from "./DadinhoStack";
import DadinhoTypography from "./DadinhoTypography";
import DadinhoTooltip from "./DadinhoTooltip";
import DadinhoList from "./DadinhoList";
import DadinhoListItemText from "./DadinhoListItemText";
import { useTheme } from "../../theme";

interface MultiValuesChipProps {
  values: any;
}

const MultiTooltip = ({ values }: MultiValuesChipProps) => {
  return (
    <DadinhoList disablePadding>
      {values?.map((value: any) => {
        return (
          <DadinhoListItem disablePadding key={value?._id}>
            <DadinhoListItemText
              primary={<DadinhoTypography>&#8226; {value?.name}</DadinhoTypography>}
              primaryTypographyProps={{ variant: "h4" }}
            />
          </DadinhoListItem>
        );
      })}
    </DadinhoList>
  );
};

export const MultiValuesChip = ({ values }: MultiValuesChipProps) => {
  const theme = useTheme();

  if (!values) return;

  const isSoloInfo = values?.length <= 1;

  const label = (
    <DadinhoStack direction="row" spacing={theme.spacing(0.5)} width={theme.spacing(30)}>
      {isSoloInfo ? (
        <DadinhoTypography maxWidth={theme.spacing(30)} overflow="hidden" textOverflow="ellipsis">
          {values[0]?.name || "-"}
        </DadinhoTypography>
      ) : (
        <>
          <DadinhoTypography maxWidth={theme.spacing(30)} overflow="hidden" textOverflow="ellipsis">
            {`${values[0]?.name || "-"}, ${values[1]?.name || "-"}`}
          </DadinhoTypography>
          <DadinhoTypography>+{values?.length - 1}</DadinhoTypography>
        </>
      )}
    </DadinhoStack>
  );

  return (
    <DadinhoTooltip title={<MultiTooltip values={values} />}>
      <DadinhoBox>
        <DadinhoChip
          variant="filled"
          label={label}
        />
      </DadinhoBox>
    </DadinhoTooltip>
  );
};

export default MultiValuesChip;
