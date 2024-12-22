import { Keywords, Operators, Token } from "../enums";
import { Declaration } from "../types";

export function checkChhap({token, tokens}: {
    token: {type: Token, value: string | number},
    tokens: {type: Token, value: string | number}[]
}) {
    let declaration
    if (token.type === Token.KEYWORD && token.value === Keywords.CHHAP) {
        declaration = {
            type: "Declaration",
            name: tokens.shift()?.value,
            value: null
        } as Declaration

        // check assignment
        if(tokens[0].type === Token.OPERATOR && tokens[0].value === Operators.EQUALTO) {
            tokens.shift()
            let expression = ''
            while (tokens.length > 0) {
                expression += tokens.shift()?.value
            }
            declaration.value = expression.trim()
        }
    }
    return declaration
}