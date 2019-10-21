### Basic Usage

```jsx
import { Breadcrumbs } from 'beautiful-ui';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/section', label: 'Section'},
  { label: 'Current page'}
];

<Breadcrumbs items={pages}/>
```

### Colors

Defining a color helps highlighting the clickable paths, the default color is set to `primary`.

```jsx
import { Breadcrumbs } from 'beautiful-ui';

const pages = [
    { path: '/', label: 'Home' },
    { path: '/section', label: 'Section'},
    { label: 'Current page'}
];

<>
  <Breadcrumbs items={pages} color="default"/>
  <Breadcrumbs items={pages} color="primary"/>
  <Breadcrumbs items={pages} color="secondary"/>
  <Breadcrumbs items={pages} color="info"/>
  <Breadcrumbs items={pages} color="warning"/>
  <Breadcrumbs items={pages} color="danger"/>
</>
```

### Icons

It's possible to attach an icon to a path label by passing a valid icon prop
(the icon name, an array of valid icon names or the instance of an Icon component).

```jsx
import { Breadcrumbs, Icon } from 'beautiful-ui';

const pages = [
    { path: '/', label: 'Home' ,icon:'home'},
    { path: '/section', label: 'Section' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" />   }
];

<Breadcrumbs items={pages}/>
```


### Renderer

If defined, the `render` property changes the usual behavior of that breadcrumb.

```jsx
import { Icon } from 'beautiful-ui';

const CustomRenderer = (props) => (<span style={{background:'red'}}>{props.label}</span>);

const pages = [
    { path: '/', label: 'Home' ,icon:'home' },
    { path: '/section', label: 'Section' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" /> , render: CustomRenderer,  }
];

<Breadcrumbs items={pages}/>
```
