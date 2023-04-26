import { createContext, useState } from "react";

export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
          {console.log(currentUser)}
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider