import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Countrycontext } from "../context/CountryContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import AddNewCountry from "../components/AddNewCountry";

const Home = () => {
    const { countries, dispatch } = useContext(Countrycontext);

    useEffect(() => {
        const getCountries = async () => {
            const res = await fetch('https://countries-restapi.herokuapp.com/api/countries');
            if (res.ok) {
                const countries = await res.json();
                dispatch({ type: "SET_COUNTRY", payload: countries })
            }
        }
        getCountries()
    }, [dispatch])

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure delete this country?")) {
            const res = await fetch(`https://countries-restapi.herokuapp.com/api/countries/${id}`, {
                method: "delete",
                mode: 'cors'
            });

            if (res.ok) {
                const country = await res.json();
                dispatch({
                    type: "DELETE_COUNTRY",
                    payload: country
                });
            }
        }
    }
    return (
        <div className="home">
            <div className="country-list">
                {
                    countries.length > 0 ?
                        <ul>
                            {countries.map(ctr => (
                                <li key={ctr._id}><Link to={`/${ctr._id}`}>{ctr.name}</Link>
                                    <div className="icon-container">
                                        <div className="icon" onClick={() => handleDelete(ctr._id)}><BsFillTrashFill /></div>
                                        <div className="icon"><Link to={`/update/${ctr._id}`}><AiFillEdit /></Link></div>
                                    </div>
                                </li>
                            ))}
                        </ul> : <div><h1>No data found</h1></div>
                }
            </div>
            <AddNewCountry />
        </div>
    )

}

export default Home;