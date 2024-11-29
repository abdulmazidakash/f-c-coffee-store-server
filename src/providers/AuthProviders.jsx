import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) =>{
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const userInfo = {
		user, 
		loading,
		createUser,
	}
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProviders;