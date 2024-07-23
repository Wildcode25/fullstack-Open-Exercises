export const getAverage = ({states})=>{
    const [good,, bad] = states
    const total = states.reduce((total, state)=>total+state)
    const average = (good-bad)/total;

    return average
}
export const getPorcentage = ({states})=>{
    const [good] = states;
    const total = states.reduce((total, state)=>total+state)
    const positivePorcentage = 100*good/total;
    return positivePorcentage
}

export const getTotal = ({states}) => states.reduce((total, state)=>total+state)