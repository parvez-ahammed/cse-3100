import { TextField } from "@mui/material";

export default function MuiTextField({ name, label, formik, ...props }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...props}
    />
  );
}
