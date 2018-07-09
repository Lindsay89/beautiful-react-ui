### Basic Usage

```jsx
<Button>A simple button</Button>
```

### Button colors

```jsx
<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="transparent">Transparent</Button>
```

### Button outlines

```jsx
<Button outline>Default</Button>
<Button outline color="primary">Primary</Button>
<Button outline color="secondary">Secondary</Button>
<Button outline color="info">Info</Button>
<Button outline color="success">Success</Button>
<Button outline color="warning">Warning</Button>
<Button outline color="danger">Danger</Button>
```

### Rounded buttons

```jsx
<div>
  <Button rounded>Default</Button>
  <Button rounded color="primary">Primary</Button>
  <Button rounded color="secondary">Secondary</Button>
  <Button rounded color="info">Info</Button>
  <Button rounded color="success">Success</Button>
  <Button rounded color="warning">Warning</Button>
  <Button rounded color="danger">Danger</Button>
</div>
<div style={{marginTop: '20px'}}>
  <Button rounded outline>Default</Button>
  <Button rounded outline color="primary">Primary</Button>
  <Button rounded outline color="secondary">Secondary</Button>
  <Button rounded outline color="info">Info</Button>
  <Button rounded outline color="success">Success</Button>
  <Button rounded outline color="warning">Warning</Button>
  <Button rounded outline color="danger">Danger</Button>
</div>
```

### Button icon
```jsx 
import { Icon } from 'beautiful-ui';

<>
  <div>
    <Button icon="coffee" />
    <Button color="primary" icon={['fab', 'react']} />
    <Button color="secondary" icon={<Icon name="bicycle" />} />
    <Button color="info" icon="info-circle" />
    <Button color="success" icon="check" />
    <Button color="warning" icon="bell" />
    <Button color="danger" icon="heart" />
  </div>
  <div style={{marginTop: '20px'}}>
    <Button rounded outline icon="coffee" />
    <Button rounded outline color="primary" icon={['fab', 'react']} />
    <Button rounded outline color="secondary" icon={<Icon name="bicycle" />} />
    <Button rounded outline color="info" icon="info-circle" />
    <Button rounded outline color="success" icon="check" />
    <Button rounded outline color="warning" icon="bell" />
    <Button rounded outline color="danger" icon="heart" />
  </div>
  <div style={{marginTop: '20px'}}>
    <Button icon="coffee">Coffee</Button>
    <Button color="primary" icon={['fab', 'react']}>React</Button>
    <Button color="secondary" icon={<Icon name="bicycle" />}>Bicycle</Button>
    <Button color="info">Info <Icon name="info-circle" /></Button>
    <Button color="success">Check <Icon name="check" /></Button>
    <Button color="warning">Bell <Icon name="bell" /></Button>
    <Button color="danger">Love u! <Icon name="heart" /></Button>
  </div>
</>
```


### Block
```jsx
<Button block>Block button</Button>
<Button block color="primary">Block button</Button>
<Button block color="secondary">Block button</Button>
<Button block color="info">Block button</Button>
<Button block color="success">Block button</Button>
<Button block color="warning">Block button</Button>
<Button block color="danger">Block button</Button>
```

### Sizes
```jsx
<Button size="small">Small size</Button>
<Button size="default" color="primary">Default size</Button>
<Button size="large" color="secondary">Large size</Button>
<Button size="large" color="info" icon={['fab', 'react']}>Large with icon</Button>
<Button size="default" color="success" icon="bell" />
<Button size="small" color="warning" icon="heart" />
```

### Disabled state
```jsx
<Button disabled>disabled</Button>
```

### Effects
```jsx
<Button color="primary" hover="round">I change shape</Button>
<Button color="secondary" hover="float">I can float</Button>
<Button color="info" hover="shrink">I can shrink</Button>
<Button color="success" hover="zoom">I can zoom</Button>
<Button color="warning" hover="reflection">I have a reflection</Button>
```

### Click Action

```
const foo = event => { alert('Click'); };

<Button color="primary" onClick={foo}>Click me!</Button>
```

### Spinners
```jsx
import { Spinner } from 'beautiful-ui';

<>
  <div>
    <Button size="small" spinner>Loading&hellip;</Button>
    <Button size="small" color="primary" spinner={<Spinner color="warning" />}>Loading&hellip;</Button>
    <Button size="small" color="secondary">Loading&hellip; <Spinner color="success" /></Button>
    <Button size="small" color="info">Loading&hellip; <Spinner type="pulse" /></Button>
  </div>
  <div style={{marginTop: '20px'}}>
    <Button spinner>Loading&hellip;</Button>
    <Button color="primary" spinner={<Spinner color="warning" />}>Loading&hellip;</Button>
    <Button color="secondary">Loading&hellip; <Spinner color="success" /></Button>
    <Button color="info">Loading&hellip; <Spinner type="pulse" /></Button>
  </div>
  <div style={{marginTop: '20px'}}>
    <Button size="large" spinner>Loading&hellip;</Button>
    <Button size="large" color="primary" spinner={<Spinner color="warning" />}>Loading&hellip;</Button>
    <Button size="large" color="secondary">Loading&hellip; <Spinner color="success" /></Button>
    <Button size="large" color="info">Loading&hellip; <Spinner type="pulse" /></Button>
  </div>
</>
```
