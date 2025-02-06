import { createContext, useState } from "react";
import { UserInterface, UserContextType } from "../types";

type props = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType>({ user: null, setUser: () => { } });

export const UserContextProvider = ({ children }: props) => {
    const [user, setUser] = useState<UserInterface | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};