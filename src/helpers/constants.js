export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

export const formatted = (balance = 0) => balance.toLocaleString('uk-UA');
