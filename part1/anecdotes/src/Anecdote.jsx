export const Anecdote = ({anecdote, votes})=>{
   return( <div>
      {anecdote}
      <p>Has {votes} votes</p>
    </div>
   )
}