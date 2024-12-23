export function codeRunner(input: string): any {
    const output = eval(input)
    // console.log(output);
    return output
}