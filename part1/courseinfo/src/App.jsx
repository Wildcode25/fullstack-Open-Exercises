import { Header } from "./components/Header.jsx"
import { Content } from "./components/Content.jsx";
import { Total } from "./components/Total.jsx";
const App = () => {
  const course = {
  name: 'Half Stack application development',

  parts: [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]
}
  return (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </>
    
  )
}

export default App