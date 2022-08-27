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
        path: '../../../packages/vue/src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/[name].vue.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../../../packages/vue/src/components/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/[test].ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../../../packages/vue/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile: 'templates/[stories].mdx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../../../packages/vue/src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'templates/[styles].css.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../../../packages/vue/src/components/{{pascalCase name}}/types.ts',
        templateFile: 'templates/[types].ts.hbs',
        skipIfExists: true,
      },
    ],
  })

  plop.setHelper('surroundWithCurlyBrace', function (text) {
    const pascalCase = plop.getHelper('pascalCase')
    return `{${pascalCase(text)}}`
  })
}
