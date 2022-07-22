import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--gray-800);
  display: flex;
  justify-content: space-between;
  padding: 2rem 16rem;

  nav {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;

    a, button {
      color: var(--white);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      transition: color 0.2s ease-in-out;
  
      &.active, &:hover {
        color: var(--yellow-600);
      }
    }

    button {
      background-color: transparent;
      border: none;
    }
  }

  section {
    color: var(--white);
    text-align: right;

    h1, p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
    }

    p {
      color: var(--gray-300);
    }
  }

  @media (max-width: 1200px) {
    padding: 2rem 12rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem 8rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;
