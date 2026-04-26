import AppHeader from "../components/AppHeader";
import Calendar from "../components/Calendar/Calendar";
import Counter from "../components/Counter";
import HabitNameInput from "../components/HabitNameInput";
import SuccessModal from "../components/SuccessModal/SuccessModal";
import { useAppStore } from "../store/useAppStore";

import "./Layouts.scss";

const Home = () => {
  const isOpen = useAppStore(state => state.isModalOpen);

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
  );
};

export default Home;
