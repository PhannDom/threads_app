import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { TextInputProps } from "./TextInputProps";

export const TextInput = ({
  name,
  control,
  label,
  isTextArea,
  rows,
}: TextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          multiline={!!isTextArea}
          rows={
            isTextArea !== undefined &&
            isTextArea &&
            rows !== undefined &&
            rows > 0
              ? rows
              : 0
          }
        />
      )}
    />
  );
};
