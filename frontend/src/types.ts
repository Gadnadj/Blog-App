export interface UserInterface {
    _id: string,
    email: string,
    username: string,
    password: string
}

export interface PostInterface {
    _id?: string,
    title: string,
    desc: string,
    photo: string,
    username: string,
    user_id: string;
    categories: Array<string>,
    updatedAt: Date
}

export interface CommentInterface {
    _id?: string,
    comment: string,
    author: string,
    post_id: string,
    user_id: string,
    updatedAt: Date
}

export interface UserContextType {
    user: UserInterface | null;
    setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>
}