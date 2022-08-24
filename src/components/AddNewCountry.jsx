import { useContext } from "react";
import CountryForm from "../components/CountryForm"
import { Countrycontext } from "../context/CountryContext";

const AddNewCountry = () => {

    const { dispatch } = useContext(Countrycontext);

    const handleCreate = async (country) => {

        const res = await fetch('http://localhost/api/countries', {
            method: "post",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(country)
        });
        console.log(country)
        if (res.ok) {
            const country = await res.json();
            dispatch({
                type: "ADD_COUNTRY",
                payload: country
            });
            return true;
        }
        return false;
    }

    return <CountryForm handleCreate={handleCreate} />
}

export default AddNewCountry;