import { createContext } from "react";

export const authContext = createContext(null);


const ContextAPI = ({children}) => {
const authInfo = {name: 'karim'}
   

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextAPI;