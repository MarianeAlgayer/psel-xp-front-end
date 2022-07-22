import styled from 'styled-components';

export const SubmitButtonContainer = styled.button`
  background-color: var(--yellow-600);
  border: 0;
  margin-top: 1rem;
  padding: 1rem;
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
