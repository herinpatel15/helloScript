import { AST, Declaration, Print } from "../types";

export function codeGen({node}: {node: AST | Declaration | Print}) {
    switch (node.type) {
        case 'Program': return node.body.map(val => {codeGen({node: val})}).join('\n');
    }
}