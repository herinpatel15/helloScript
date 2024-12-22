import { checkChhap } from "./allChecks/checkChaap";
import { Keywords, Operators, Token } from "./enums";
import { AST, Declaration } from "./types";


const code = `
dabbu x = 2
dabbu y = 5
dabbu sum = x + y
dabbu product = x * y
dabbu divide = x / y

chhap sum
`;

function lexer(input: string) {
    const tokens = [];
    let cursor = 0;

    while (cursor < input.length) {
        let char = input[cursor];

        // check spaces
        if (/\s/.test(char)) {
            cursor ++;
            continue;
        }

        // check alphabet a-z && A-Z
        if (/[a-zA-Z]/.test(char)) {
            let word = '';
            while (/[a-zA-Z0-9]/.test(char)) {
                word += char;
                char = input[++cursor];
            }
            if (Object.values(Keywords).includes(word as Keywords)) {
                tokens.push({type: Token.KEYWORD, value: word});
            } else {
                tokens.push({type: Token.IDENTIFIER, value: word});
            }
            continue;
        }

        // check digits 0-9
        if (/[0-9]/.test(char)) {
            let num = '';
            while (/[0-9]/.test(char)) {
                num += char;
                char = input[++cursor];
            }
            tokens.push({type: Token.NUMBER, value: parseInt(num)});
            continue;
        }

        // check operators
        if (Object.values(Operators).includes(char as Operators)) {
            tokens.push({type: Token.OPERATOR, value: char});
            cursor ++;
            continue;
        }
    }
    return tokens;
}

function parser(tokens: {type: Token, value: string | number}[]) {
    let ast = {
        type: 'Program',
        body: [],
    } as AST
     while(tokens.length > 0) {
        let token = tokens.shift() as {type: Token, value: string | number};
        switch(token.type){
            case Token.KEYWORD: 
                let declaration = checkChhap({token, tokens}) as Declaration
                ast.body.push(declaration)
                break;
        }
     }
     return ast;
}


function compiler(input: string) {
    const tokens = lexer(input) as {type: Token, value: string | number}[]
    const ast = parser(tokens)
}

compiler(code)