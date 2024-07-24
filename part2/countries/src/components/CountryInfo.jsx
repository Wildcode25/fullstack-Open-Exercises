import { useState } from "react";
export const CountryInfo = ({ country, initialView }) => {
  const [view, setView] = useState(initialView);
  const handleView = () => setView(!view);
  return (
    <li>
      {!view ? (
        <>
          <b>{country.name.common}</b>
          <button onClick={handleView}>Show</button>
        </>
      ) : (
        <div className="countryCard">
          <h3>{country.name.common}</h3>
          <p>Area: {country.area}</p>
          <p>Capital: {country.capital} </p>
          <ul>{Object.values(country.languages).map((language, index) => <li key={`country-lenguage-${index}`}>
            {language}
          </li>)}</ul>
          <div>
            <img src={country.flags.png} alt="" />
          </div>
          <button onClick={handleView}>Hide</button>
        </div>
      )}
    </li>
  );
};
