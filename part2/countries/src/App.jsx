import { useState, useEffect } from 'react'
import { Input } from './components/Input';
import { Countries } from './components/Countries';
import axios from 'axios';
import db from './db.json'
const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
function App() {
  const [value, setValue] = useState('');
  const [countriesToShow, setCountries]=useState(null);
  useEffect(()=>{
    if(value==='') return 
    
    // axios.get(url).then(response=>response.data).then(countries=>{
    //   setCountries(countries.filter(country=>country.name.common.toLowerCase().includes(value.toLowerCase())))
    // })
    
    setCountries(db.filter(country=>country.name.common.toLowerCase().includes(value.toLowerCase())))
  }, [value])
  return (
   <>
    <p>
      Find countries: <Input value={value} onChange={(e)=>setValue(e.target.value)} />
    </p>
    
    <Countries countries={countriesToShow}/>
    </>
  )
}

export default App
