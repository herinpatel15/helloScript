import { codeRunner } from "./components/codeRunner";
import { compiler } from "./components/compiler";

const code = `
dabbu x = 3

chhap x
`;

const baseCode = compiler(code)
const result = codeRunner(baseCode)
console.log(result);