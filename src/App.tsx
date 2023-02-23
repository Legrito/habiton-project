import { createStore } from "@reduxjs/toolkit";
import Calendar from "./components/Calendar/Calendar";

import './App.scss';

const App = () => (
  <div className="container">
    <Calendar />
  </div>
);

export default App;
