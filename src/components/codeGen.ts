import { AST, Declaration, Print } from "../types";

export function codeGen({ node }: { node: AST | Declaration | Print }): string {
    // console.log(node.type);
    switch (node.type) {
        case 'Program':
            // console.log(node);
            return (node as AST).body
                .map((child) => codeGen({ node: child }))
                .join('\n');

        case 'Declaration':
            const declarationNode = node as Declaration
            // console.log(declarationNode);
            return `let ${declarationNode.name} = ${declarationNode.value}`

        case 'Print':
            const printNode = node as Print
            // console.log(printNode);
            return `console.log(${printNode.expression})`

        default:
            throw new Error(`Unknown node type: ${(node as any).type}`);
    }
}