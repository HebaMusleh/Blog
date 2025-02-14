import React from "react";

interface Props {
  title: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  htmlFor: string;
  error?: string;
}

const FormInput: React.FC<Props> = ({
  title,
  type,
  id,
  name,
  placeholder,
  htmlFor,
  error,
  ...InputProp
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={htmlFor} className="form-label">
        {title}
      </label>
      <input
        type={type}
        id={id}
        className="form-control"
        name={name}
        placeholder={placeholder}
        {...InputProp}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default FormInput;
