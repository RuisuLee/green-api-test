import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelText: string;
  placeholdetText: string;
  className?: string;
}

export function Input({
  name,
  labelText,
  placeholdetText,
  className,
  type,
}: IInputProps) {
  return (
    <div className={className}>
      <label htmlFor={name} className="general-label">
        {labelText}
      </label>
      {type === "tel" ? (
        <InputMask
          mask="+7 999 999 99 99"
          className="general-input"
          id={name}
          name={name}
          placeholder={placeholdetText}
          // value={value}
          // onChange={onChange}
        ></InputMask>
      ) : (
        <input
          className="general-input"
          type={type}
          id={name}
          name={name}
          // value={value}
          placeholder={placeholdetText}
          // onChange={onChange}
        ></input>
      )}
    </div>
  );
}
