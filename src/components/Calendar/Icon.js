import { useState } from "react";
import "./Icon.scss";

const Icon = () => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleToggle = () => {
  //   setIsChecked(prevState => !prevState);
  // }

  return (
    <>
      <svg viewBox="0 0 0 0" style={{'position': 'absolute', 'zIndex': '-1', 'opacity': '0'}}>
        <defs>
          <path
            id="todo__box"
            stroke="#4AA96C"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          ></path>
          <path
            id="todo__check"
            stroke="#F55C47"
            d="M10 13l2 2 5-5"
          ></path>
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>
        <label class="todo">
          <input className="todo__state" type="checkbox" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 25"
            class="todo__icon"
          >
            <use xlinkHref="#todo__box" class="todo__box"></use>
            <use xlinkHref="#todo__check" class="todo__check"></use>
            <use xlinkHref="#todo__circle" class="todo__circle"></use>
          </svg>
        </label>
    </>
)};

export default Icon;
