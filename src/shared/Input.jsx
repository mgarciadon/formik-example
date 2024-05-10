import { Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

const StyledInput = ({
  id,
  placeholder,
  type,
  className,
  value,
  onChange,
  onBlur,
  errors,
  error,
}) => {
  return (
    <>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors ? <Label className="text-danger">{error}</Label> : null}
      <ErrorMessage name={type} />
    </>
  );
};

export default StyledInput;
