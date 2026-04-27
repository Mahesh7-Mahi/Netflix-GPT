export const checkValidateData = (email, password, name, mobile) => {
  ///^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/

  const isEmailValid = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidName = name != null && name.trim().length > 1 ? true : false;

  if (name != null && !isValidName) {
    return "Name must have above 2 characters";
  }
  if (!isEmailValid) {
    return "Email ID is not valid";
  }
  if (!isPasswordValid) {
    return "Your password must contain between 4 and 60 characters.";
  }

  return null;
};
