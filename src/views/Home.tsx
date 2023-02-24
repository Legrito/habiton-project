import AppHeader from "../components/AppHeader";
import Calendar from "../components/Calendar/Calendar";
import Counter from "../components/Counter";

import "./Layouts.scss";

const Home = () => (
  <>
    <AppHeader />
    <div className="container">
      <div className="home-wrapper">
      <Counter />
      <Calendar />
      </div>
    </div>
  </>
);

export default Home;
