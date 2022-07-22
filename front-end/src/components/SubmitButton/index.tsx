import { ButtonHTMLAttributes } from 'react';

import { SubmitButtonContainer } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function SubmitButton({ label, ...props }: IButtonProps) {
  return (
    <SubmitButtonContainer
      type="submit"
      {...props}
    >
      {label}
    </SubmitButtonContainer>
  );
}
