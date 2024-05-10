import { Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

const StyledInput = ({placeholder, type, className, value, onChange, onBlur, errors, error}) => {
    return (
        <>
            <Input
                placeholder={placeholder}
                type={type}
                id={type}
                className={className}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {errors ? (<Label className="text-danger">{error}</Label>) : null}
            <ErrorMessage name={type}/>
        </>
    )
}

export default StyledInput;
