const babel = require('@babel/core');
const plugin = require('./src/plugin');

var example = `
console.tom('XD');
`;

const { code } = babel.transform(example, { plugins: [plugin] });

console.log(code);
