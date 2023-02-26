import IconCross from "./IconCross";
import styles from "./SuccessModal.module.scss";

const SuccessModal = () => {
  const handleClick = () => {};
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
