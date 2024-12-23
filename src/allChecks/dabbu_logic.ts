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
        if (tokens[0].type === Token.NUMBER) {
            while (tokens.length > 0 && tokens[0].type !== Token.KEYWORD) {
                // console.log(tokens);
                
                expression += tokens.shift()!.value
    
                // console.log("done : "+expression);
                
            }
        } else if (tokens[0].type === Token.STRING) {
            tokens.shift()
            console.log(tokens[0]);
            tokens.shift()
            if (tokens[0].type === Token.STRING) {
                console.log('done');
                tokens.shift()
            }
            console.log(tokens);
            
            
        }
        
        declaration.value = expression.trim()
    }
    return declaration
}