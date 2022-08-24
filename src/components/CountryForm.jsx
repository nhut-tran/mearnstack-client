import { useState } from "react"


const CountryForm = ({ countryProp, handleUpdate, handleCreate }) => {
    const initialState = countryProp ? countryProp : {
        name: "",
        capital: "",
        population: 0,
        area: 0,
        continent: ''
    };
    const [country, setCountry] = useState(initialState)

    const handleChange = (property, value) => {
        setCountry((prevState) => {
            return {
                ...prevState,
                [property]: value
            }
        })
    }
    const handleSubmit = async () => {
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
            }
        }
    }
    return (
        <form className="country-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <h1 className="form-title">{countryProp ? "Update Country" : "Add new country"}</h1>
            <div className="form-group">
                <label htmlFor="name">Country Name</label>
                <input type='text' id="name" name="name" value={country.name} onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="capital">Country capital</label>
                <input type='text' id="capital" name="capital" value={country.capital} onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="population">Country population</label>
                <input type='text' id="population" name="population" value={country.population} onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="area">Country area</label>
                <input type='text' id="area" name="area" value={country.area} onChange={(e) => handleChange(e.target.id, e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="continent">Continent</label>
                <select id="continent" name="continent" value={country.continent} onChange={(e) => handleChange(e.target.id, e.target.value)}>
                    <option disabled value="">--Select continent--</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="europe">Europe</option>
                    <option value="ameria">America</option>
                </select>
            </div>
            <input type='submit' value={countryProp ? "Update Country" : "Add new country"} />
        </form>
    )
}

export default CountryForm;