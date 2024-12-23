import { codeRunner } from "./components/codeRunner";
import { compiler } from "./components/compiler";

const code = `
dabbu y = 555
dabbu x = 'hello'

chhap y
`;

const baseCode = compiler(code)
// const result = codeRunner(baseCode)
// console.log(result)