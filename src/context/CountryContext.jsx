import { createContext } from 'react';
import useCountryHook from '../hook/useCountryHook'

export const Countrycontext = createContext();
const CountryContextProvider = ({ children }) => {

    const [state, dispatch] = useCountryHook()
    return <Countrycontext.Provider value={{ ...state, dispatch }}>
        {children}
    </Countrycontext.Provider>
}

export default CountryContextProvider;