const path = require('path');
const theme = require('./styleguidist.theme');

module.exports = {
  /* eslint-disable global-require */
  webpackConfig: require('./webpack.styleguidist.config'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  ribbon: {
    url: 'http://beautiful-ui.binteractions.com/',
    text: 'Fork me on GitHub',
  },
  exampleMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
      sectionDepth: 1,
      description: 'General info about the project',
    },
    {
      name: 'Documentation',
      sectionDepth: 2,
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
      ],
    },
    {
      name: 'Components',
      usageMode: 'collapse',
      sectionDepth: 2,
      sections: [
        {
          name: 'Elements',
          pagePerSection: true,
          components: () => [
            'src/components/Elements/Button/Button.js',
            'src/components/Elements/ButtonGroup/ButtonGroup.js',
            'src/components/Elements/Icon/Icon.js',
            'src/components/Elements/Spinner/Spinner.js',
          ],
        },
        {
          name: 'Forms',
          pagePerSection: true,
          components: () => [
            'src/components/Forms/Toggle/Toggle.js',
          ],
        },
        {
          name: 'Layout',
          components: 'src/components/Layout/**/index.{js,jsx}',
        },
        {
          name: 'Utils',
          components: 'src/components/Utils/**/index.{js,jsx}',
        },
      ],
    },
  ],
  require: [
    path.join(__dirname, 'docs/styles/styleguidist.overrides.css'),
  ],
  ...theme,
};
