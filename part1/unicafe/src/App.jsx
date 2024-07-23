import { useState } from "react";
import { FeedBacks } from "./components/FeedBacks.jsx";
import { Statistics } from "./components/Statistics.jsx";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <FeedBacks  setters={[setGood,setNeutral,setBad]} states={[good, neutral, bad]}/>
      <Statistics states={[good, neutral, bad]}/>
    </div>
  );
};

export default App;
