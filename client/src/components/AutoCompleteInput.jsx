import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import exerciseNames from "../exercises.json";
const AutoCompleteInput = ({
  theme,
  setName,
  setAutocompleteValue,
  autocompleteValue,
  label,
  placeholder,
  id,
  customStyles = {},
}) => {
  const baseStyles = {
    width: {
      xs: "90%",
      sm: "80%",
      md: "70%",
      lg: "100%",
    },
    maxWidth: "350px",
  };

  const filterOptions = (options, state) => {
    const inputValue = state.inputValue.toLowerCase();
    const exactMatches = options.filter(
      (option) => option.name.toLowerCase() === inputValue
    );
    const partialMatches = options.filter(
      (option) =>
        option.name.toLowerCase().includes(inputValue) &&
        option.name.toLowerCase() !== inputValue
    );

    const sortedOptions = [...exactMatches, ...partialMatches];
    return sortedOptions.slice(0, 5);
  };
  return (
    <Autocomplete
      id={id}
      clearOnBlur={false}
      disablePortal
      options={exerciseNames}
      getOptionLabel={(option) => option.name}
      sx={{
        ...baseStyles,
      }}
      filterOptions={filterOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          slotProps={{
            inputLabel: {
              style: { color: "#a3a3a3" },
            },
          }}
          sx={{ width: "350px" }}
        />
      )}
      value={autocompleteValue}
      onChange={(event, value) => {
        if (value) {
          setName(value.name);
          setAutocompleteValue(null);
        }
      }}
    />
  );
};

export default AutoCompleteInput;
