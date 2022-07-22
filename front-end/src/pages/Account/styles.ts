import styled from 'styled-components';

export const AccountContainer = styled.main`
  background-color: white;
  padding: 1rem;

  h1 {
    background-color: var(--gray-100);
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 1rem;
    text-align: center;
  }

  h2 {
    background-color: var(--gray-100);
    color: var(--gray-700);
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem;
  }

  form {
    padding-top: 2rem;
    text-align: center;

    h2 {
      background-color: var(--white);
      color: var(--gray-700);
      font-size: 1rem;
      font-weight: 400;
    }

    input {
      border: 0;
      border-bottom: 2px solid var(--black);
      font-size: 2rem;
      font-weight: 400;
      margin-top: 1rem;
      padding: 0.5rem;
      text-align: center;
      width: 80%;
      
      &::placeholder {
        color: var(--gray-300);
      }
    }
  }
`;

export const OperationTypeButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
  gap: 0.4rem;
`;

interface IOperationTypeButtonProps {
  isActive: boolean;
}

export const OperationTypeButton = styled.button<IOperationTypeButtonProps>`
  align-items: center;
  background-color: var(--white);
  border: 2px solid ${({ isActive, color }) => (isActive ? color : 'white')};
  border-radius: 8px;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  gap: 0.2rem;
  justify-content: center;
  padding: 0.2rem;

  svg {
    color: ${({ color }) => (color)};
  }
`;
