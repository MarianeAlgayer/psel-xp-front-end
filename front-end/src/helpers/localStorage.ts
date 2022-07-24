export const saveLocalStorage = (email: string) => {
  const loginData = {
    email,
    lastAcces: Date(),
  };

  localStorage.setItem('@xp-app:login-data', JSON.stringify(loginData));
};

export const getLocalStorage = () => {
  const storedLoginData = localStorage.getItem('@xp-app:login-data') || '{}';

  return JSON.parse(storedLoginData);
};
