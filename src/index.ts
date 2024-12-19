const code = `
aa x = 5
aa y = 10
aa sum = x + y

lakho sum
`

function lexer(input: string) {
    const tokens = []
    let cursor = 0

    while (cursor < input.length) {
        let char = input[cursor]

        // check spaces
        if (/\s/.test(char)) {
            cursor ++
            continue
        }

        // check alphabet a-z && A-Z
        if (/[a-zA-Z0-9]/.test(char)) {
            let word = ''
            while (/[a-zA-Z0-9]/.test(char)) {
                word += char
                char = input[++cursor]
            }
        }
    }
}

// function compiler(input) {
//     const tokens = lexer(input)
// }