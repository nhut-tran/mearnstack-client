import { Link } from "react-router-dom";

const CountryDetail = ({ country }) => {

    return (
        <div className="country-detail">
            <Link className="go-back" to="/">← Home</Link>
            <h2>{country.name}</h2>
            <div><span>Capital:</span> {country.capital}</div>
            <div><span>Population:</span> {country.population}</div>
            <div><span>Area:</span> {country.area}</div>
            <div><span>Continent:</span> {country.continent}</div>
        </div>
    )
}

export default CountryDetail;