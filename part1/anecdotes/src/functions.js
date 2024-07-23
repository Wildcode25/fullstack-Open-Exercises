export const getAnecdoteWithMostVotes = ({ anecdotes, votes }) => {
    const votesClone = [...votes]
    const mostVotes = votesClone.sort((a, b) => b-a)[0];
    const index = votes.findIndex(vote=>vote==mostVotes)
    const text = anecdotes[index]

    return {text, votes: mostVotes };
  };