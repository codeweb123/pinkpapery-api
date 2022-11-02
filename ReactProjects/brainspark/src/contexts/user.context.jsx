import { createContext, useState } from 'react'

//context-actual value you want to access
export const UserContext = createContext({

})

//provider- actual component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    return <UserContext.Provider value={}>{children}</UserContext.Provider>
}

//wrap provider around app
<UserProvider>
    <app />
</UserProvider>