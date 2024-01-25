import { createContext, useContext ,useState } from "react";

const DetailContext = createContext({}) ;

export const DetailProvider = ({ children }) => {
    const [details, setDetails] = useState(0);

    return(
        <DetailContext.Provider value={{ details , setDetails }}>
            {children}
        </DetailContext.Provider>
    )
}

export default DetailContext ;