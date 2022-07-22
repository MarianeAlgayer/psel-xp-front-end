import styled from 'styled-components';

export const TableContainer = styled.table`
    background-color: var(--white);
    text-align: center;
    width: 100%;
    border-collapse: collapse;

    caption {
      background-color: var(--gray-300);
      border-bottom: 2px solid var(--white);
      font-weight: 600;
      padding: 1rem;
      text-align: left;
    }

    th {
      background-color: var(--gray-100);
      border-bottom: 2px solid var(--white);
      font-weight: 500;
    }

    td {
      border-bottom: 2px solid var(--gray-100);
    }

    th, td {
      padding: 0.8rem 0;
      width: 25%;
    }
`;

export const FormContainer = styled.form`
  padding: 2rem 0;

  input {
    border: none;
    padding: 0.4rem;
    text-align: center;
    width: 100%;
  }
`;

export const OperationTypeButtonsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem 0;
`;

interface IOperationTypeButtonProps {
  isActive: boolean;
}

export const OperationTypeButton = styled.button<IOperationTypeButtonProps>`
  background-color: ${({ isActive, color }) => (isActive ? color : '#F1F1F1')};
  border: none;
  padding: 0.5rem;
  width: 100%;
  transition: filter 0.2s ease-in-out;

  &:disabled {
    background-color: var(--gray-100);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(1.1);
  }
`;

export const OperationSummary = styled.section`
  color: var(--white);

  h2 {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;
