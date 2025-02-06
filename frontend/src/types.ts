export interface UserInterface {
    _id: string,
    email: string,
    username: string,
    password: string
}

export interface UserContextType {
    user: UserInterface | null;
    setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
}