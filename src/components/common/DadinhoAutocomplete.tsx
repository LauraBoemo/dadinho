import React from "react";
import {
  Autocomplete,
  autocompleteClasses,
  AutocompleteProps,
  Popper,
  PopperProps,
  PaperProps,
  styled,
} from "@mui/material";
import DadinhoPaper from "./DadinhoPaper";
import DadinhoButton from "./DadinhoButton";
import DadinhoStack from "./DadinhoStack";
import DadinhoTypography from "./DadinhoTypography";
import DadinhoLoader from "./DadinhoLoader";
import DadinhoTextField from "./DadinhoTextField";
import DadinhoListItem from "./DadinhoListItem";

type PopperComponentProps = PopperProps;

const StyledAutocompletePopper = styled(Popper)(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
  zIndex: "9999 !important",
  [`& .${autocompleteClasses.listbox}`]: {
    [`& .${autocompleteClasses.option}`]: {
      "&.Mui-focused": {
        backgroundColor: theme.palette.primary.light
      },
      '&[aria-selected="true"] ': {
        backgroundColor: theme.palette.primary.dark,
        "&.Mui-focused": {
          backgroundColor: theme.palette.primary.light,
        },
      },
    },
  },
}));

const PopperComponent: React.FC<PopperComponentProps> = (props) => {
  const { placement, ...other } = props;
  return <StyledAutocompletePopper {...other} placement="bottom-start" />;
};

interface AutocompletePaperComponentProps extends PaperProps {
  multiple?: boolean;
}

const StyledAutocompletePaper = styled(DadinhoPaper)(({ theme }) => ({
  border: "none",
  borderRadius: 3.2,
  "& .MuiAutocomplete-noOptions": { color: theme.palette.text.primary },
  "& .MuiAutocomplete-listbox": {
    maxHeight: 230,
  },
}));

const AutocompletePaperComponent: React.FC<AutocompletePaperComponentProps> = ({
  children,
  multiple,
  ...props
}) => {
  return (
    <StyledAutocompletePaper {...props}>
      <DadinhoStack direction="column">
        {children}
      </DadinhoStack>
    </StyledAutocompletePaper>
  );
};

export type DadinhoAutoCompleteProps<T> = Omit<AutocompleteProps<T, boolean, boolean, boolean, "div">, "renderInput"> & {
  onSelectAll?: () => void;
  onClearAll?: () => void;
  addNewLabel?: string;
  addNewLabelSize?: number;
  onAddNew?: () => void;
};

//@ts-ignore
export const DadinhoAutocomplete: React.FC<DadinhoAutoCompleteProps> = ({
  addNewLabel,
  addNewLabelSize = 10,
  onAddNew,
  ...props
}) => {
  return (
    <Autocomplete
      loadingText={
        <DadinhoTypography variant="body1">
          <DadinhoLoader />
        </DadinhoTypography>
      }
      PopperComponent={PopperComponent}
      PaperComponent={(paperProps) => (
        <AutocompletePaperComponent
          {...paperProps}
          elevation={2}
          multiple={props.multiple}
        />
      )}
      renderOption={(optionsProps, option, { selected }) => (
        <DadinhoListItem {...optionsProps} selected={selected}>
          {(props.getOptionLabel(option) && props.getOptionLabel(option)) ||
            (addNewLabel && (
              <DadinhoButton
                fullWidth
                onClick={(event) => {
                  event.stopPropagation();
                  onAddNew && onAddNew();
                }}
                startIcon="+"
                sx={{ ":hover": { bgcolor: "transparent" }, height: addNewLabelSize, justifyContent: "flex-start" }}
              >
                <DadinhoTypography variant="body1" fontWeight="fontWeightBold">
                  {addNewLabel}
                </DadinhoTypography>
              </DadinhoButton>
            ))}
        </DadinhoListItem>
      )}
      renderInput={(params) => (
        <DadinhoTextField
          placeholder={props.placeholder}
          {...params}
        />
      )}
      {...props}
    />
  );
};

export default DadinhoAutocomplete;
