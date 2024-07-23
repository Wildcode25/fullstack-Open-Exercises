import { Part } from "./Part"
export const Content = ({parts})=>{
    const [part1, part2, part3] = parts
    return (
        <>
        <Part part={part1.part} exercises={part1.exercises}/>
        <Part part={part2.part} exercises={part2.exercises}/>
        <Part part={part3.part} exercises={part3.exercises}/>
        </>
        )
    
}