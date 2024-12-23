import { Print } from "../types"

export function ChhapLogic({tokens}: {
    tokens: {type: string, value: string | number}[]
}) {
    let expression: Print = {
        type: "Print",
        expression: tokens.shift()!.value
    }
    return expression
}