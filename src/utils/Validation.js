export const CheckValidation = (email,password) => {

const EmailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const PasswordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if (!EmailValidation) return "Email is not valid";
if (!PasswordValidation) return "Password is not valid";

return null
}