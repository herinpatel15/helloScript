import { Operators, Token } from "../constants"
import { Declaration } from "../types"

export function DabbuLogic({ tokens }: {
    tokens: { type: string, value: string | number }[]
}) {

    let declaration: Declaration = {
        type: 'Declaration',
        name: tokens.shift()!.value,
        value: null
    }

    if (tokens[0].type === Token.OPERATOR && tokens[0].value === Operators.EQUALTO) {
        tokens.shift()
        let expression = ''
        while (tokens.length > 0 && tokens[0].type !== Token.KEYWORD) {
            expression += tokens.shift()!.value
        }
        declaration.value = expression.trim()
    }
    return declaration
}