export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // component generator
  plop.setGenerator('component', {
    description: 'design system component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please type the name of your new component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/[name].vue.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/[test].ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile: 'templates/[stories].mdx.hbs',
      },
      {
        type: 'add',
        path: './../styles/components/{{pascalCase name}}.module.css',
        templateFile: 'templates/[styles].css.hbs',
      },
      {
        type: 'add',
        path: './../types/components/{{pascalCase name}}.ts',
        templateFile: 'templates/[types].ts.hbs',
      },
    ],
  })

  plop.setHelper('surroundWithCurlyBrace', function (text) {
    const pascalCase = plop.getHelper('pascalCase')
    return `{${pascalCase(text)}}`
  })
}
