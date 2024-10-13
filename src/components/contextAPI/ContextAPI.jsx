import { createContext, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext(null);


const ContextAPI = ({children}) => {
const [user, setUser] = useState([null])

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const authInfo = {
    user,
    createUser
}
   

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextAPI;