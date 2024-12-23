import { compiler } from "./components/compiler";

const code = `
dabbu x = 2
dabbu y = 5
dabbu sum = x + y
dabbu product = x * y
dabbu divide = x / y

chhap sum
`;

(function () {
    compiler(code)
})();