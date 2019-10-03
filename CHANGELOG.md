# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2019-06-10

### Added

- Create package.json
- Setup .gitignore
- Add a CHANGELOG.md
- Add a Readme.md and a Contributing.md
- Add Styleguidist
- Add ESLint
- Add Stylelint
- Add Jest test framework + Enzyme test utility
- Build System
- Button Component
- Spinner Component
- Icon Component

## [0.2.0] - 2019-06-10

### Added

- Toggle component
- Label private component, to be used to render labels in form components
- HelpText component, to be used to render help texts in form components
- Toggle component tests
- Label component tests
- HelpText component tests


## [0.3.0] - 2019-06-14

### Added

- Accessibility tools (AXE and jsx-a11y)


## [0.4.0] - 2019-06-13

### Added

- ButtonGroup component
- ButtonGroup tests
- `lodash` as project dependency

## [0.5.0] - 2019-06-14

### Added

- Breadcrumb component
- Breadcrumb component tests 

## [0.6.0] - 2019-06-18

### Added

- Pill component
- Pill component tests 
- Breadcrumb `renderer` prop renamed as `render`


## [0.6.1] - 2019-06-19

### Fixed

- The rounded prop now defines the shape of the Pill component.

## [0.7.0] - 2019-06-20

### Added

- Alert component
- Alert component tests 

## [0.7.1] - 2019-06-20

### Fixes

- Colors description now correctly defines `danger` color.


## [0.8.0] - 2019-06-20

### Added

- Accordion component
- Accordion component tests

## [0.9.0] - 2019-07-01

### Added

- Tab component
- Tab component tests

## [0.9.1] - 2019-07-01

### Fixes

- BaseProps added to the TabContent component
- TabContent component tests added to test the BaseProps

## [0.9.2] - 2019-07-01

### Fixes

- Accordion color behaviour changed
- Accordion tests changed to test the new color prop

## [0.9.3] - 2019-07-01

### Fixes

- Toggle component focus state defined by CSS
- Accessibility issues on Toggle component fixed: added `aria-label`

## [0.9.4] - 2019-07-02

### Fixes

- Accessibility issues on Button component fixed: added `aria-label`


## [0.9.5] - 2019-07-02

### Fixes

- Button component focus state defined by CSS

## [0.9.6] - 2019-07-02

### Fixes

- Tab component is now exported from index.js

## [0.10.0] - 2019-07-02

### Added

- Test coverage report with NYC
- Test coverage should now be >= 80%

## [0.11.0] - 2019-07-02

### Added

- Tests on shared functions

## [0.12.0] - 2019-07-02

### Added

- Placeholder component
- Placeholder component tests

## [0.13.0] - 2019-07-02

### Added

- Image component
- Image component tests

## [0.14.0] - 2019-07-03

### Added

- `rounded` prop to the Image component
- Avatar component
- Avatar component tests

## [0.15.0] - 2019-07-04

### Added

- `warn` utility function has been added to have a more readable codebase

## [0.16.0] - 2019-07-04

### Added

- Close Icon
- Close Icon tests

## [0.16.1] - 2019-07-04

### Fixed

- CloseIcon component was not showing in Alert
- Improved Alert documentation
- `nyc` added to `devDependencies`
- Avatar sizes bug fixed

## [0.17.0] - 2019-07-05

### Added

- Portal component
- Portal component tests
- Modal component
- Modal component tests

### Fixed

- Few PropTypes validation errors

## [0.18.0] - 2019-07-14

### Added

- Props are spread down to the component's first element (when possible)

### Fixed

- Removed `BaseProps` shared prop type

## [0.19.0] - 2019-07-19

### Added

- Popup component
- Popup tests
- getElementAbsolutePosition function
- getElementAbsolutePosition tests

## [0.20.0] - 2019-07-18

### Added

- Input component
- Icon component

## [0.20.1] - 2019-08-04

### Added

- Input component tests


## [0.21.0] - 2019-08-07

### Added

- FloatingContent component
- FloatingContent component tests
- Renaming Popup component as Popover
- Rewriting Popover on top of FloatingContent
- Dependencies updated

## [0.22.0] - 2019-08-07

### Added

- Select component
- Select component tests

### Fixed
- Input component: removed className from <input> tag


### [0.23.0] - 2019-09-20

### Added

- Layout folder
- Grid component
- GridColumn component
- Grid component tests
- GridColumn component tests

### [0.24.0] - 2019-09-20

### Added

- Dependencies updated

### [0.25.0] - 2019-09-20

### Added

- Card component
- CartTitle component
- CardImage component
- CardContent component
- CardFooter component
- Title component
- Paragraph component

- Card component tests
- CartTitle component tests
- CardImage component tests
- CardContent component tests
- CardFooter component tests
- Title component tests
- Paragraph component tests

### [0.25.1] - 2019-09-27

### Fixed

- Rewriting getElementAbsolutePosition function to return the right element position and get rid of the previous bug.

### [0.25.2] - 2019-09-30

### Fixed

- Added className prop to CardTitle, CardContent, CardFooter components.
