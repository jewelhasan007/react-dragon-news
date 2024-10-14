import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext(null);

const ContextAPI = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('login user', currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return ()=> {
        unSubscribe()
    }
},[])

const logOut = () => {
    setLoading(true)
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