import LoginForm from "../components/LoginForm/LoginForm";
import Logo from "../components/Logo";

import './Layouts.scss';

const LoginPage = () => (
  <>
    <header>
      <Logo size="78" />
      <h3>Improve your habits with HabitOn app</h3>
      <p>Use the 21-day challenge approach to create a habit.</p>
      {/* <span>Keep calm and HabitOn</span> */}
    </header>
    <div className="container">
      <LoginForm />
    </div>
  </>
);

export default LoginPage;
