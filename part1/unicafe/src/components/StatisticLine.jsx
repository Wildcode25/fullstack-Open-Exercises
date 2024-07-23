export const StatisticLine = ({text, value})=>{
    return (
        <tr>
        <td><strong>{text}: </strong></td>
        <td>{value}</td>
      </tr>
    )
}