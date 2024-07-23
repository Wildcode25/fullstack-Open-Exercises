export const FeedBacks = ({ setters, states }) => {
  const [
    setGood,
    setNeutral,
    setBad
  ] = setters 
  const [good, neutral, bad] = states;
  const handleGoodClick = (state) => {
    setGood(good+1)
  };
  const handleNeutralClick = ()=>{
    setNeutral(neutral+1)
  }
  const handleBadClick = ()=>{
    setBad(bad+1)
  }
  return (
    <section>
      <h2>FeedBacks</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
    </section>
  );
};
