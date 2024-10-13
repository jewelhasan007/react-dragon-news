import { createContext, useState } from "react";

export const authContext = createContext(null);


const ContextAPI = ({children}) => {
const [user, setUser] = useState([null])

const authInfo = {
    user,
}
   

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextAPI;