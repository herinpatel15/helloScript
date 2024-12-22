export type Declaration = {
    type: string;
    name: string | number;
    value: string | null;
}

export type AST = {
    type: string;
    body: Declaration[] | [];
}