import { useState } from "react";
import { Anecdote } from "./Anecdote";
import { getAnecdoteWithMostVotes } from "./functions";
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
 
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const handleNextClick = () => {
    const newSelected = Math.floor((anecdotes.length - 1) * Math.random());
    setSelected(newSelected);
  };
  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };
  
  const anecdote = getAnecdoteWithMostVotes({ anecdotes, votes });

  return (
    <>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={handleNextClick}>Next anecdote</button>
      <button onClick={handleVoteClick}>Vote</button>
      <h2>Anecdote with most vote</h2>
      <Anecdote anecdote={anecdote.text} votes={anecdote.votes} />
    </>
  );
};

export default App;
