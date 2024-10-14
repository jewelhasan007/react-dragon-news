import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext(null);

const ContextAPI = ({children}) => {
const [user, setUser] = useState([null])

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('login user', currentUser);
    setUser(currentUser);
    });
    return ()=> {
        unSubscribe()
    }
},[])

const logOut = () => {
    return signOut(auth);
}

const authInfo = {
    user,
    createUser,
    logIn,
    logOut
}
   
return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextAPI;