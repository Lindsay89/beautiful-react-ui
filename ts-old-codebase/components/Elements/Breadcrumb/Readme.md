Breadcrumb component is a navigation item that shows the current path

It is possible use an array of strings
```jsx
<Breadcrumb path={['Home', 'Lorem', 'Ipsum']} />
```

Or of objects
```jsx
const path = [
    link: '...', name: 'Home',
    link: '...', name: 'Lorem',
    link: '...', name: 'Ipsum',
];

<Breadcrumb path={path} />
```

Or a mix of both
```jsx
const path = [
    'Home',
    link: '...', name: 'Lorem',
    'Ipsum',
];

<Breadcrumb path={path} />
```

