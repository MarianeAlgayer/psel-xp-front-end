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
