import { CountryInfo } from "./CountryInfo"
export const Countries = ({countries})=>{
    if(countries==null) return <h2>Waiting for filter </h2>
    if(countries.length==0) return <h2>Country not found</h2>
    if(countries.length>10) return <h2>Too many matches, specify another filter</h2>
    if(countries.length==1) return <CountryInfo country={countries[0]} initialView={true}/>
    return <ul>
        {countries.map((country)=><CountryInfo key={country.area} country={country} initialView={false}/>
    )}
    </ul>

}