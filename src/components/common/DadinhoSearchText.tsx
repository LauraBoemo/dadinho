import DadinhoTextField from "./DadinhoTextField";
import DadinhoInputAdornment from "./DadinhoInputAdornment";
import DadinhoTypography from "./DadinhoTypography";
import { useTheme } from "../../theme";
import SearchIcon from '@mui/icons-material/Search';

interface SearchTextProps {
  searchText: string;
  onChange: (searchText: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const SearchText = ({ searchText, onChange, placeholder, fullWidth, disabled }: SearchTextProps) => {
  const theme = useTheme();

  return (
    <DadinhoTextField
      sx={{
        m: 0,
        minWidth: fullWidth ? "100%" : "fit-content",
        backgroundColor: "common.white",
        borderRadius: theme.spacing(1),
        "& .MuiInput-root": {
          mt: 0,
          borderRadius: theme.spacing(1),
        },
        input: {
          marginRight: theme.spacing(1.5),
          "&::placeholder": {
            opacity: 0.5,
          },
        },
      }}
      disabled={disabled}
      variant="standard"
      value={searchText || ""}
      fullWidth={fullWidth}
      onChange={(event) => onChange(event.target.value)}
      InputLabelProps={{ required: true }}
      InputProps={{
        placeholder: placeholder || "Search",
        disableUnderline: true,
        "aria-label": "Search",
        startAdornment: (
          <DadinhoInputAdornment position="end">
            <DadinhoTypography variant="h3" display="flex">
              <SearchIcon />
            </DadinhoTypography>
          </DadinhoInputAdornment>
        ),
      }}
    />
  );
};

export default SearchText;
