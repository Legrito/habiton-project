import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { validateEmail } from "./helpers";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jwtToken = "08a5019c-17e1-4977-8f42-65a12843ea02";
    const error = validateEmail(email);

    if (error) {
      return setError(error);
    } else if (password.length < 3) {
      return setError("Passport number must be at least 3 characters long");
    }

    try {
      const response = await axios.post(
        "https://63f872df1dc21d5465bf737e.mockapi.io/auth/login",
        {
          email,
          password,
          token: jwtToken,
        }
      );

      signIn({
        token: response.data.token,
        expiresIn: 4800,
        tokenType: "Bearer",
        authState: { email },
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
    setEmail(e.target.value.trim());
  };
  const handlePasswordCange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };
  return (
    <div className={styles.wrap}>
      <div>
        <h3>Login</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
          />
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={handlePasswordCange}
            placeholder="Password"
          />
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
