const babel = require('@babel/core');
const plugin = require('../plugin');

var example = `
console.tom('XD');
`;

it('Basic example', () => {
  const { code } = babel.transform(example, { plugins: [plugin] });
  expect(code).toMatchSnapshot();
});
