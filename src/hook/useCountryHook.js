import { useReducer } from "react";

const reducer = (state = { countries: [] }, action) => {
    switch (action.type) {
        case "SET_COUNTRY":
            return { countries: [...action.payload] };
        case "ADD_COUNTRY":
            return { countries: [action.payload, ...state.countries] }
        case "DELETE_COUNTRY":
            return { countries: state.countries.filter(ctr => ctr._id !== action.payload._id) }
        case "UPDATE_COUNTRY":
            const index = state.countries.findIndex(ctr => ctr._id === action.payload._id);
            if (index > -1) {
                return {
                    countries: [...state.countries.slice(0, index), action.payload, ...state.countries.slice(index + 1)]
                }
            }
            return state;

        default:
            return state;
    }
}

const useCountryHook = () => {
    return useReducer(reducer, { selectedId: '', countries: [] })
}

export default useCountryHook