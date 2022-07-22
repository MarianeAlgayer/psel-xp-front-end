import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, ...props }: IInputProps) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        {...props}
      />
    </label>
  );
}
