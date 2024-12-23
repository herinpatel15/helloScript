export type Declaration = {
    type: "Declaration";
    name: string | number;
    value: string | null;
}

export type Print = {
    type: "Print",
    expression: string | number
}

export type AST = {
    type: string;
    body: (Declaration | Print)[];
}

export enum TokenType {
    KEYWORD,
    OPERATOR,
    IDENTIFIER,
    NUMBER,
}