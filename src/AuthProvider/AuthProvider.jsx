import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth , googleProvider)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo = {createUser , signInUser , user , signInGoogle}
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;

export { UserContext };