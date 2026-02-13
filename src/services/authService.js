export const loginRequest = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Login success" });
    }, 1000);
  });
};

export const registerRequest = async (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Register success" });
    }, 1000);
  });
};
