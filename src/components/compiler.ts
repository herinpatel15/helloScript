import { codeGen } from "./codeGen";
import { lexer } from "./lexer";
import { parser } from "./parser";

export function compiler(input: string) {
    const tokens = lexer(input) as { type: string, value: string | number }[]
    const ast = parser(tokens)
    // console.log(ast)
    const executableCode = codeGen({node: ast})
    return executableCode
}