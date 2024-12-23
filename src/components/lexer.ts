import { Keywords, Operators, Token } from "../constants";

export function lexer(input: string) {
    const tokens = [];
    let cursor = 0;

    while (cursor < input.length) {
        let char = input[cursor];

        // check spaces
        if (/\s/.test(char)) {
            cursor++;
            continue;
        }

        // check alphabet a-z && A-Z
        else if (/[a-zA-Z]/.test(char)) {
            let word = '';
            while (/[a-zA-Z0-9]/.test(char)) {
                word += char;
                char = input[++cursor];
            }
            if (Object.values(Keywords).includes(word)) {
                tokens.push({ type: Token.KEYWORD, value: word });
            } else {
                tokens.push({ type: Token.IDENTIFIER, value: word });
            }
            continue;
        }

        // check digits 0-9
        else if (/[0-9]/.test(char)) {
            let num = '';
            while (/[0-9]/.test(char)) {
                num += char;
                char = input[++cursor];
            }
            tokens.push({ type: Token.NUMBER, value: parseInt(num) });
            continue;
        }

        // check operators
        else if (Object.values(Operators).includes(char)) {
            tokens.push({ type: Token.OPERATOR, value: char });
            cursor++;
            continue;
        }

        // check string
        else if (/['"`]/.test(char)) {
            tokens.push({type: Token.STRING, value: char});
            cursor++
            continue
        }
    }
    return tokens;
}