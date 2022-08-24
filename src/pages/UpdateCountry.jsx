import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import CountryForm from "../components/CountryForm"
import { Countrycontext } from "../context/CountryContext";

const UpdateCountry = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { countries, dispatch } = useContext(Countrycontext);
    const country = countries.find(ctr => ctr._id === id);
    const handleUpdate = async (id, data) => {
        const res = await fetch(`http://localhost/api/countries/${id}`, {
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
        <h1>Country not exist</h1>
    }

}

export default UpdateCountry