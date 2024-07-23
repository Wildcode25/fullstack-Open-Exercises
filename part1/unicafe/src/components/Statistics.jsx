import { getAverage, getPorcentage, getTotal } from "./functions.js";
import { StatisticLine } from "./StatisticLine.jsx";

export const Statistics = ({ states }) => {
  const [good, neutral, bad] = states;
  const total = getTotal({ states })  
  if ( total> 0)
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={getAverage({ states })} />
          <StatisticLine text="Positive" value={getPorcentage({ states })} />
        </tbody>
      </table>
    );
  return (
    <p>
      <strong>No feedback given</strong>
    </p>
  );
};
