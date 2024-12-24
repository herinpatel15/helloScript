import { codeRunner } from "./components/codeRunner";
import { compiler } from "./components/compiler";

// dabbu y = 5
// dabbu x = 10
// dabbu sum = x + y

const code = `
dabbu z = 'hello'
dabbu y = 5

chhap z + y
`;

const baseCode = compiler(code)
const result = codeRunner(baseCode)
// console.log("output : \n", result)