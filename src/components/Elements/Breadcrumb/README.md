### Basic Usage

Basic breadcrumb. Defining paths helps to go back to previous pages by clicking on labels

```jsx
const pages = [
  { path: '/', label: 'Home' },
  { path: '/section', label: 'Section'},
  { label: 'Current page'}
];

<Breadcrumb items={pages}/>
```

### Breadcrumb colors
Colors helps to identificate labels with paths. Default color is primary.

```jsx

const pages = [
    { path: '/', label: 'Home' },
    { path: '/section', label: 'Section'},
    { label: 'Current page'}
];
<>
  <Breadcrumb items={pages} color="default"/>
  <Breadcrumb items={pages} color="primary"/>
  <Breadcrumb items={pages} color="secondary"/>
  <Breadcrumb items={pages} color="info"/>
  <Breadcrumb items={pages} color="warning"/>
  <Breadcrumb items={pages} color="danger"/>
</>
```

### Breadcrumb icons
It is possible to attach icons to a label by passing both the icon name or the instance of an Icon component.

```jsx
import { Icon } from 'beautiful-ui';

const pages = [
    { path: '/', label: 'Home' ,icon:'home'},
    { path: '/section', label: 'Section' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" />   }
];
<>
  <Breadcrumb items={pages}/>
</>
```


### Render

If defined, the render property of a single item changes the usual behavior of the breadcrumb.

```jsx
import { Icon } from 'beautiful-ui';

const CustomRenderer = (props) => (<span style={{background:'red'}}>{props.label}</span>);

const pages = [
    { path: '/', label: 'Home' ,icon:'home' },
    { path: '/section', label: 'Section' , icon:['fab', 'react'] },
    { label: 'Current page',icon:<Icon name="bicycle" /> , render: CustomRenderer,  }
];

<Breadcrumb items={pages}/>
```
