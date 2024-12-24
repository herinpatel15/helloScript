import { Print } from "../types"

export function ChhapLogic({tokens}: {
    tokens: {type: string, value: string | number}[]
}) {
    // let expression: Print = {
    //     type: "Print",
    //     expression: tokens.shift()!.value
    // }
    // return expression
    let expressionValue: Print = {
        type: "Print",
        expression: null
    }
    let val = ''
    while (tokens.length > 0 && tokens[0].type !== 'KEYWORD') {
        val += tokens.shift()!.value
    }
    expressionValue.expression = val.trim()
    return expressionValue
}