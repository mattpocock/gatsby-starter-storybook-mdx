const path = require('path');

module.exports = (plop) => {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create a React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../../src/components/{{properCase name}}/index.js',
        ),
        templateFile: path.resolve(__dirname, './templates/index.js.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../../src/components/{{properCase name}}/index.stories.js',
        ),
        templateFile: path.resolve(
          __dirname,
          './templates/index.stories.js.hbs',
        ),
      },
    ],
  });
};
