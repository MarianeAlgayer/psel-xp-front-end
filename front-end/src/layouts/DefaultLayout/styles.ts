import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
  main {
    margin: 2rem 16rem;

    @media (max-width: 1200px) {
      margin: 2rem 12rem;
    }

    @media (max-width: 1024px) {
      margin: 2rem 8rem;
    }

    @media (max-width: 768px) {
      margin: 2rem 4rem;
    }

    @media (max-width: 480px) {
      margin: 2rem;
    }
  }
`;
