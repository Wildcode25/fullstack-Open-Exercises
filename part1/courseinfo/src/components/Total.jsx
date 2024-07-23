export const Total = ({parts})=>{
    const exercises = parts.map(part=>part.exercises)
    const totalExercises = exercises.reduce((total, exercise)=>total+exercise)
    return <footer>
        <strong>Number of exercises: </strong>{totalExercises}
    </footer>
}