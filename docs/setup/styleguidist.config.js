const path = require('path');
const theme = require('./styleguidist.theme');

module.exports = {
  title: 'Beautiful-ui | A collection of lightweight and easy-to-customise controlled React components',
  /* eslint-disable global-require */
  webpackConfig: require('./styleguidist.webpack'),
  /* eslint-enable global-require */
  ignore: ['test/**/*.spec.{js,jsx}', 'node_modules', 'docs', 'test'],
  ribbon: {
    url: 'http://beautiful-ui.binteractions.com/',
    text: 'Fork me on GitHub',
  },
  styleguideDir: '../../dist-ghpages',
  exampleMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Introduction',
      content: '../../README.md',
      sectionDepth: 1,
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
            '../../src/components/Elements/Accordion/Accordion.js',
            '../../src/components/Elements/Alert/Alert.js',
            '../../src/components/Elements/Avatar/Avatar.js',
            '../../src/components/Elements/Breadcrumbs/Breadcrumbs.js',
            '../../src/components/Elements/Button/Button.js',
            '../../src/components/Elements/ButtonGroup/ButtonGroup.js',
            '../../src/components/Elements/DropDown/DropDown.js',
            '../../src/components/Elements/Icon/Icon.js',
            '../../src/components/Elements/Image/Image.js',
            '../../src/components/Elements/Pill/Pill.js',
            '../../src/components/Elements/Placeholder/Placeholder.js',
            '../../src/components/Elements/Spinner/Spinner.js',
            '../../src/components/Elements/List/List.js',
            '../../src/components/Elements/Tab/Tab.js',
            '../../src/components/Elements/Modal/Modal.js',
            '../../src/components/Elements/Popover/Popover.js',
            '../../src/components/Elements/FloatingContent/FloatingContent.js',
          ],
        },
        {
          name: 'Forms',
          pagePerSection: true,
          components: () => [
            '../../src/components/Forms/Label/Label.js',
            '../../src/components/Forms/Input/Input.js',
            '../../src/components/Forms/Checkbox/Checkbox.js',
            '../../src/components/Forms/Select/Select.js',
            '../../src/components/Forms/FormGroup/FormGroup.js',
            '../../src/components/Forms/DisplayField/DisplayField.js',
            '../../src/components/Forms/TextArea/TextArea.js',
          ],
        },
        {
          name: 'Typography',
          pagePerSection: true,
          components: () => [
            '../../src/components/Typography/Title/Title.js',
            '../../src/components/Typography/Paragraph/Paragraph.js',
            '../../src/components/Typography/Link/Link.js',
            '../../src/components/Typography/Divider/Divider.js',
          ],
        },
        {
          name: 'Layout',
          pagePerSection: true,
          components: () => [
            '../../src/components/Layout/Grid/Grid.js',
            '../../src/components/Layout/Card/Card.js',
          ],
        },
        {
          name: 'Enterprise',
          pagePerSection: true,
          components: () => [
            '../../src/components/Enterprise/Diagram/Diagram.js',
          ],
        },
      ],
    },
  ],
  // Override Styleguidist components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'CustomLogo'),
  },
  ...theme,
};