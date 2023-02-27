import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import authOperations from "../../features/auth/authOperations";
import { validateEmail } from "./helpers";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const dispatch = useAppDispatch();
  const token = useAppSelector(store => store.auth.token)

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const error = validateEmail(email);

    if (error) {
      return setError(error);
    } else if (password.length < 3) {
      return setError("Passport number must be at least 3 characters long");
    }

    dispatch(authOperations.register({ email, password }));
    if(token !== null) {
      signIn({
        token,
        expiresIn: 4800,
        tokenType: "Bearer",
        authState: { email },
      });
    }
  };

  const handleSingIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const jwtToken = "08a5019c-17e1-4977-8f42-65a12843ea02";
    const error = validateEmail(email);

    if (error) {
      return setError(error);
    } else if (password.length < 3) {
      return setError("Passport number must be at least 3 characters long");
    }

    dispatch(authOperations.register({ email, password }));
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
        <form className={styles.form}>
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
          <div>
            <button
              className={styles.button}
              onClick={handleRegister}
              type="button"
            >
              Register
            </button>
            <button
              className={styles.button}
              onClick={handleSingIn}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
