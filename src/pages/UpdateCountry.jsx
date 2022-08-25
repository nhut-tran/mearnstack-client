import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import CountryForm from "../components/CountryForm"
import { Countrycontext } from "../context/CountryContext";

const UpdateCountry = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { countries, dispatch } = useContext(Countrycontext);
    const ctr = countries.find(ctr => ctr._id === id);
    const [country, setCountry] = useState(ctr);
    //fetch data when user refresh page
    useEffect(() => {
        const getCountry = async () => {
            const res = await fetch(`https://countries-restapi.herokuapp.com/api/countries/${id}`)
            if (res.ok) {
                const country = await res.json();
                setCountry(country)
            }
        }
        if (!ctr) {
            getCountry()
        }
    }, [id, ctr])
    const handleUpdate = async (id, data) => {
        const res = await fetch(`https://countries-restapi.herokuapp.com/api/countries/${id}`, {
            method: "put",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const country = await res.json();

            dispatch({
                type: "UPDATE_COUNTRY",
                payload: country
            });
            navigate('/')

        }
    }

    if (country) {
        return <div className="update-country">
            <Link className="go-back" to="/">← Home</Link>
            <CountryForm countryProp={country} handleUpdate={handleUpdate} />
        </div>
    } else {
        <h1>Please wait ...</h1>
    }

}

export default UpdateCountry