import CountryDetail from "../components/CountryDetail";
import { useContext } from "react"
import { useParams } from "react-router-dom";
import { Countrycontext } from "../context/CountryContext"

const Country = () => {
    const { countries } = useContext(Countrycontext);
    const { id } = useParams();
    const country = countries.find(ctr => ctr._id === id);
    return (
        <CountryDetail country={country} />
    )
}

export default Country;