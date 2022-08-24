
const validateCountryForm = (country) => {
    const validateSchema = {
        name: "string",
        capital: "string",
        population: "number",
        area: "number",
        continent: "string"
    }
    delete country._id;
    const emptyErr = [];
    const typeErr = [];
    const errMessage = [];

    for (const [key, value] of Object.entries(country)) {
        if (!value) {
            emptyErr.push(key);
            errMessage.push(key + " is required")
        } else {
            if (validateSchema[key] === 'number') {
                if (isNaN(value)) {

                    typeErr.push(key);
                    errMessage.push(key + " must be a number");

                }
            } else {
                if (typeof value !== validateSchema[key]) {
                    typeErr.push(key);
                }
            }

        }
    }
    if (emptyErr.length === 0 && typeErr.length === 0) {
        return {
            isValid: true,
            err: []
        }
    } else {
        return {
            isValid: false,
            err: [...emptyErr, ...typeErr],
            errMessage
        }
    }
}

export default validateCountryForm;