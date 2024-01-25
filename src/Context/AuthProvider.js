import { createContext, useContext ,useState } from "react";

const AuthContext = createContext({}) ;

export const AuthProvider = ({ children }) => {
    const [ auth , setAuth ] = useState({}) ;
    const [ products , setProducts ] = useState([]) ;
    const [ categories , setCategories ] = useState([]) ;
    
    return(
        <AuthContext.Provider value={{ auth , setAuth ,
        products , setProducts ,categories, setCategories }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext ;