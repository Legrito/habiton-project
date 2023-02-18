import Header from "./components/Header";
import Calendar from "./components/Calendar/Calendar";

import './App.css';

const App = () => (
  <div style={{ 'display': 'flex', 'alignItems': 'center', 'flexDirection': 'column'}}>
    <Header />
    <Calendar />
  </div>
);

export default App;
