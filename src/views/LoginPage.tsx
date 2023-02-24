import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
// import jwt from "jsonwebtoken";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const signIn = useSignIn();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jwtToken = "08a5019c-17e1-4977-8f42-65a12843ea02";

    try {
      const response = await axios.post(
        "https://63f872df1dc21d5465bf737e.mockapi.io/auth/login",
        {
          email,
          password,
          token: jwtToken
        }
      );

      signIn({
        token: response.data.token,
        expiresIn: 4800,
        tokenType: "Bearer",
        authState: { email }
      });

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return setError(error.message);
      } else {
        return setError("An unexpected error occurred");
      }
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordCange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // const handleClick = () => {
  //   navigate('/');
  // };
  return (
    <div className="container">
      <h3>Login</h3>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={handleChangeEmail} placeholder="Email" />
        <input
          value={password}
          onChange={handlePasswordCange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
