import { useState } from "react"
import validateCountryForm from "../utils/countryFormValidate";

const CountryForm = ({ countryProp, handleUpdate, handleCreate }) => {
    const initialState = countryProp ? countryProp : {
        name: "",
        capital: "",
        population: 0,
        area: 0,
        continent: ""
    };
    const [country, setCountry] = useState(initialState);
    const [errorField, setErrorField] = useState([]);
    const [errMessage, setErrMessge] = useState([])
    const handleChange = (property, value) => {
        setCountry((prevState) => {
            return {
                ...prevState,
                [property]: value
            }
        })
    }
    const handleSubmit = async () => {
        const validateRes = validateCountryForm(country)
        if (validateRes.isValid) {
            if (handleUpdate) {
                handleUpdate(countryProp._id, country);
            } else if (handleCreate) {
                const res = await handleCreate(country);
                if (res) {
                    setCountry({
                        name: "",
                        capital: "",
                        population: 0,
                        area: 0,
                        continent: ''
                    })
                    setErrorField([]);
                    setErrMessge([]);
                }
            }
        } else {
            setErrorField(validateRes.err)

            setErrMessge(validateRes.errMessage)
        }
    }

    return (
        <form className="country-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>

            <h1 className="form-title">{countryProp ? "Update Country" : "Add new country"}</h1>
            {errMessage.length > 0 && <div>{errMessage.map(err => {
                return <p className="error-message">{err}</p>
            })}</div>}
            <div className="form-group">
                <label htmlFor="name">Country Name</label>
                <input type='text' className={errorField.includes('name') ? "error-field" : ""}
                    id="name" name="name" value={country.name}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="capital">Country capital</label>
                <input type='text' className={errorField.includes('capital') ? "error-field" : ""}
                    id="capital" name="capital" value={country.capital}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="population">Country population</label>
                <input type='text' className={errorField.includes('population') ? "error-field" : ""}
                    id="population" name="population" value={country.population}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="area">Country area</label>
                <input type='text' className={errorField.includes('area') ? "error-field" : ""}
                    id="area" name="area" value={country.area}
                    onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="continent">Continent</label>
                <select id="continent" className={errorField.includes('continent') ? "error-field" : ""} name="continent" value={country.continent} onChange={(e) => handleChange(e.target.id, e.target.value)}>
                    <option disabled value="">--Select continent--</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="europe">Europe</option>
                    <option value="north ameria">North America</option>
                    <option value="south ameria">South America</option>
                    <option value="australia">Australia</option>
                </select>
            </div>
            <input type='submit' value={countryProp ? "Update Country" : "Add new country"} />
        </form>
    )
}

export default CountryForm;