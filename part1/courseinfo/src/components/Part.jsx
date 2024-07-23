export const Part = ({ part, exercises})=>{
    return <div>
        <h2>
            {part}
        </h2>
        <p>
            <strong>exercises: </strong> {exercises}
        </p>
    </div>
}