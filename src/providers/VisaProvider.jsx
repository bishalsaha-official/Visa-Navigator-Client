import { createContext, useEffect, useState } from "react";

export const VisaContext = createContext(null)

const VisaProvider = ({children}) => {
    const [visas, setVisas] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/visas')
        .then(res => res.json())
        .then(data => setVisas(data))
    }, [])

    const visaInfo = {
        visas,
        setVisas
    }
    return (
        <VisaContext.Provider value={visaInfo}>
            {children}
        </VisaContext.Provider>
    );
};

export default VisaProvider;