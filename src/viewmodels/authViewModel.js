import { useState } from "react";
import { loginRequest, registerRequest } from "../services/authService";
import { createUser } from "../models/userModel";

export const useAuthViewModel = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const login = async () => {
    const res = await loginRequest(email, password);
    setMessage(res.message);
  };

  const register = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const user = createUser({ fullName, email, password, age });
    const res = await registerRequest(user);
    setMessage(res.message);
  };

    const switchToRegister = () => {
    setIsLogin(false);
    };

    const switchToLogin = () => {
    setIsLogin(true);
    };

  return {
    isLogin,
    setIsLogin,

    email,
    password,
    fullName,
    age,
    confirmPassword,

    setEmail,
    setPassword,
    setFullName,
    setAge,
    setConfirmPassword,

    login,
    register,
    message,

    switchToRegister,
    switchToLogin
  };
};
