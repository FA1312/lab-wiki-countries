import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="countrylist">
      <ul>
        {countries.map((country) => (
          <Link to={`/${country.alpha3Code}`}>
            <div className="countrycard">
              <h3>{country.name.common}</h3>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
