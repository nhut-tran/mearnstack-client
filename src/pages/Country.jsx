import CountryDetail from "../components/CountryDetail";
import { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import { Countrycontext } from "../context/CountryContext"
import { useEffect } from "react";

const Country = () => {
    const { id } = useParams();
    const { countries } = useContext(Countrycontext);
    const ctr = countries.find(ctr => ctr._id === id);
    const [country, setCountry] = useState(ctr);

    //fetch data when user refresh page
    useEffect(() => {
        const getCountry = async () => {
            const res = await fetch(`http://localhost/api/countries/${id}`)
            if (res.ok) {
                const country = await res.json();
                setCountry(country)
            }
        }
        if (!ctr) {
            getCountry()
        }
    }, [id, ctr])
    if (country) {
        return (

            <CountryDetail country={country} />
        )
    } else {
        return <h1>Please wait...</h1>
    }

}

export default Country;