export interface Admin {
        
        full_name?: string;
        email?: string;
        password: string;
        phone?: number;
        role?: string;
}

export interface Token {
        token: string
}