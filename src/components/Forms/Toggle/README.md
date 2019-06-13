### Basic usage

For Toggle is a controlled stateless component you have to wrap it within a stateful component 

```jsx
const Toggler = (props) => {
  const [value, setValue] = React.useState(false);
  
  return <Toggle value={value} onChange={(event, value) => setValue(value)} {...props}/>
}

<Toggler />
```

### Label & help text

```jsx
const Toggler = (props) => {
  const [value, setValue] = React.useState(false);
  
  return <Toggle value={value} onChange={(event, value) => setValue(value)} {...props}/>
}

<Toggler label="Toggle component" helpText="Further information on this field" />
```

### Toggle colors

Colors are meant to highlight the syntactic meaning of a toggle.

```jsx
const Toggler = (props) => {
  const [value, setValue] = React.useState(false);
  
  return <Toggle value={value} onChange={(event, value) => setValue(value)} {...props}/>
}

<>
  <Toggler color="default" />
  <Toggler color="primary" />
  <Toggler color="secondary" />
  <Toggler color="info" />
  <Toggler color="success" />
  <Toggler color="warning" />
  <Toggler color="danger" />
</>
```

### Toggle sizes

Toggle component comes with sizes

```jsx
const Toggler = (props) => {
  const [value, setValue] = React.useState(false);
  
  return <Toggle value={value} onChange={(event, value) => setValue(value)} {...props}/>
}

<>
  <Toggler size="small" color="primary" />
  <Toggler size="default" color="secondary" />
  <Toggler size="large" color="info" />
</>
```
