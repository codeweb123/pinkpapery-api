import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils'
//context-actual value you want to access
export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null,
});
//provider- actual component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user)
        })
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

//wrap provider around app
<UserProvider>
    <app />
</UserProvider>