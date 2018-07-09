Button component accepts a series of standard colors:
```jsx
<Button>A simple button</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="transparent">Transparent</Button>
```

Button component can be fluid:
```jsx
<Button fluid color="primary">A fluid primary button, pretty long... innit?</Button>
```

and rounded:
```jsx
<Button rounded color="primary">A rounded button</Button>
<Button rounded color="primary" icon="icon_like"></Button>
```

and outlined:
```jsx
<Button outline>Outlined default button</Button>
<Button outline color="primary">Primary</Button>
<Button outline color="secondary">Secondary</Button>
<Button outline color="info">Info</Button>
<Button outline color="success">Success</Button>
<Button outline color="warning">Warning</Button>
<Button outline color="danger">Danger</Button>
```

can have different sizes:
```jsx
<Button outline color="primary" size="small">Small size</Button>
<Button outline color="primary" size="default">Default size</Button>
<Button outline color="primary" size="large">Large size</Button>
```

can be disabled as well:
```jsx
<Button disabled color="primary">disabled</Button>
```

can have some icons
```jsx
const Icon = require('../Icon').default;

<>
    <Button icon="icon_heart" rounded>Loving grey hearth</Button>
    <Button outline color="primary" rounded icon={<Icon name="icon_heart" color="danger" />}>Loving red hearth</Button>
    <Button color="secondary" icon="icon_headphones" iconPosition="right">Listen to some music</Button>
</>
```

can have some hover effects:
```jsx
<Button color="primary" hoverEffect="round">I change shape</Button>
<Button color="primary" hoverEffect="float">I can float</Button>
<Button color="primary" hoverEffect="shrink">I can shrink</Button>
<Button color="primary" hoverEffect="zoom">I can zoom</Button>
<Button color="primary" hoverEffect="reflection">I have a reflection</Button>
```

can show a spinning icon:
```jsx
const Spinner = require('../Spinner').default;

<>
    <Button color="primary" spinner>Loading some huge stuff</Button>
    <Button color="secondary" spinner={<Spinner type="bars" size="small" color="warning" />}>
    A button with a Spinner as a prop
    </Button>
    <Button color="info" spinner spinnerPosition="right">
    Spinner placed on the right
    </Button>
</>

```

```
const foo = event => { alert('Hello'); console.log(event); }

<Button color="info" onClick={foo}>
    Click me!
</Button>
```
