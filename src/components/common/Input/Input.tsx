import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

import "./Input.css";
import { useStoreMap } from "effector-react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
  placeholdetText: string;
  $form: any;
  setField: any;
  className?: string;
}

export function Input({
  name,
  labelText,
  placeholdetText,
  className,
  type,
  required,
  $form,
  setField,
}: IInputProps) {
  const handleChange = setField.prepend((e: any) => ({
    key: e.target.name,
    value: e.target.value,
  }));
  const value = useStoreMap({
    store: $form,
    keys: [name],
    fn: (values: any) => values[name] || "",
  });
  return (
    <div className={className}>
      <label htmlFor={name} className="general-label">
        {labelText}
      </label>
      {type === "tel" ? (
        <InputMask
          mask="79999999999"
          className="general-input"
          id={name}
          name={name}
          placeholder={placeholdetText}
          value={value}
          onChange={handleChange}
          required={required}
        ></InputMask>
      ) : (
        <input
          className="general-input"
          type={type}
          id={name}
          name={name}
          placeholder={placeholdetText}
          value={value}
          required={required}
          onChange={handleChange}
        ></input>
      )}
    </div>
  );
}
