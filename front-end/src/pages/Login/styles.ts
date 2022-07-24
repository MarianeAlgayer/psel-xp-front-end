import styled from 'styled-components';

export const LoginContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  margin: 2rem 24rem;

  img {
    height: 10%;
    margin: auto 0;
  }

  @media (max-width: 1200px) {
    margin: 2rem 16rem;
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
`;

export const LoginForm = styled.form`
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  padding: 2rem;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;

    input {
      border: 0;
      border-bottom: 2px solid var(--black);
      padding: 0.5rem;
      text-align: center;
      
      &::placeholder {
        color: var(--gray-300);
      }
    }
  }
`;
