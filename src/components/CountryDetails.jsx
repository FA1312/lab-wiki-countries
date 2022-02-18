import { Link, useParams } from 'react-router-dom';
import countriesData from './../countries.json';

function CountryDetails(props) {
  const { countryId } = useParams();
  const getCountry = countriesData.find((country) => {
    console.log(country);
    return country.alpha3Code === countryId;
  });

  return (
    <div>
      <h1>Country Details</h1>
      {getCountry && (
        <>
          <p>{getCountry.name.official}</p>
          <p>Capital city: {getCountry.capital}</p>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${getCountry.alpha2Code.toLowerCase()}.png`}
          />
          <p>
            Area: {getCountry.area} <sup>2</sup>
          </p>
          <p>Region: {getCountry.region}</p>
        </>
      )}

      <Link to="/">Back</Link>
    </div>
  );
}

export default CountryDetails;
