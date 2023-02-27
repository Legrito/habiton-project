import { useEffect, useState } from "react";
import { HABIT_NAME } from "../constants";
import styles from "./LoginForm/LoginForm.module.scss";

const HabitNameInput = () => {
  const [habit, setHabit] = useState(localStorage.getItem(HABIT_NAME) ?? "");
  const [isEditFinished, setIsEditFinished] = useState(!!habit);

  const handleClick = () => {
    setIsEditFinished(false);
  };

  if (habit && isEditFinished) {
    return (
      <>
        <p style={{ marginBottom: "10px" }}>{habit}</p>
        <button className={styles.button} type="button" onClick={handleClick}>
          Edit
        </button>
      </>
    );
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setHabit(evt.target.value);
    localStorage.setItem(HABIT_NAME, evt.target.value);
  };

  const handleBlur = () => {
    setIsEditFinished(true);
  };

  return (
    <input
      className={styles.input}
      value={habit}
      onChange={handleChange}
      onBlur={handleBlur}
      type="text"
      placeholder={`"Learn JavaScript 100 hours per day"`}
    />
  );
};

export default HabitNameInput;
