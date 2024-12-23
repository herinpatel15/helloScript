import { ChhapLogic } from "../allChecks/chhap_logic";
import { DabbuLogic } from "../allChecks/dabbu_logic";
import { Keywords, Token } from "../constants";
import { AST } from "../types";

export function parser(tokens: { type: string, value: string | number }[]) {
    let ast: AST = {
        type: 'Program',
        body: [],
    }
    while (tokens.length > 0) {
        let token = tokens.shift() as { type: string, value: string | number };
        switch (token.type) {
            case Token.KEYWORD:
                // declaration to all
                let declaration
                let expression

                // all keyword is identifier
                // dabbu 
                if (token.value === Keywords.DABBU) {
                    declaration = DabbuLogic({tokens: tokens})
                }

                // chhap
                else if (token.value === Keywords.CHHAP) {
                    expression = ChhapLogic({tokens: tokens})
                }

                // set ast tree
                if(declaration) {
                    ast.body.push(declaration)
                } else if (expression) {
                    ast.body.push(expression)
                } else {
                    console.error('syntax error')
                }
                break;
        }
    }
    return ast;
}