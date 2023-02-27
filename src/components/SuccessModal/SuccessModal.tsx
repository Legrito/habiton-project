import { useEffect } from "react";
import { useAppDispatch } from "../../redux/app/hooks";
import { modalToggled } from "../../redux/features/modal/modalSlice";
import IconCross from "./IconCross";
import { HABIT_NAME, HABITONED_DAYS } from "../../constants";
import styles from "./SuccessModal.module.scss";

const SuccessModal = () => {
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    localStorage.removeItem(HABITONED_DAYS);
    localStorage.removeItem(HABIT_NAME);
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(modalToggled());
  };
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p>Keep calm and HabbitOn</p>
          <button className={styles.button} type="button" onClick={handleClick}>
            <IconCross />
          </button>
        </div>
        <div className={styles.body}>
          <span>🎉Congrats!🎉</span>
          <span>You've successfully finished your 21-day chalange!</span>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
