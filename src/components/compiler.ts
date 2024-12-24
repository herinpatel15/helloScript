import { Declaration } from "../types";
import { codeGen } from "./codeGen";
import { lexer } from "./lexer";
import { parser } from "./parser";

export function compiler(input: string) {
    const tokens = lexer(input) as { type: string, value: string | number }[]
    console.log("Tokens : ", tokens);
    
    const ast = parser(tokens)
    console.log("AST : ", ast)
    // console.log("AST : ", ast.body[0].value);
    
    const executableCode = codeGen({node: ast})
    console.log("my code : \n", executableCode);
    
    return executableCode
}