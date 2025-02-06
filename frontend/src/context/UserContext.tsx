import { createContext, useEffect, useState } from "react";
import { UserInterface, UserContextType } from "../types";
import axios from "axios";
import { URL } from "../url";

type props = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType>({ user: null, setUser: () => { } });

export const UserContextProvider = ({ children }: props) => {
    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await axios.get(URL + "/api/user/refetch", { withCredentials: true });
            setUser(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
            setUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};