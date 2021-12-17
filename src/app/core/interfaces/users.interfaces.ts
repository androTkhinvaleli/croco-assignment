export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        city: string,
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    },
};

export interface Post {
    id: number,
    userId: number,
    title: string,
    body: string,
};
