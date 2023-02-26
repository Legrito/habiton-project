import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import AppHeader from "../components/AppHeader";
import Calendar from "../components/Calendar/Calendar";
import Counter from "../components/Counter";
import HabitNameInput from "../components/HabitNameInput";
import SuccessModal from "../components/SuccessModal/SuccessModal";

import "./Layouts.scss";

const Home = () => {
  const counter = useAppSelector(state => state.counter);
  const { isOpen } = useAppSelector(state => state.modal);

  // useEffect(() => {
  //   return () => { console.log(counter)};
  // });

  return (
  <>
    <AppHeader />
    <div className="container">
      <div className="home-wrapper">
        <div>
          <Counter />
          <HabitNameInput />
        </div>
        <Calendar />
      </div>
    </div>
    {isOpen && <SuccessModal />}
  </>
)};

export default Home;
