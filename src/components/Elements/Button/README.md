### Basic Usage

As simple as the following:

```jsx
import { Button } from 'beautiful-ui';

<Button>A simple button</Button>
```

### Button colors

Colors are meant to highlight the syntactic meaning of a button.

```jsx
import { Button } from 'beautiful-ui';

<>
  <Button>Default</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="info">Info</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>
  <Button color="transparent">Transparent</Button>
</>
```

### Button outlines

Subtle appearance can also be applied to a button, if in need of a 
get rid of the hefty, colorful background.

```jsx
import { Button } from 'beautiful-ui';

<>
  <Button outline>Default</Button>
  <Button outline color="primary">Primary</Button>
  <Button outline color="secondary">Secondary</Button>
  <Button outline color="info">Info</Button>
  <Button outline color="success">Success</Button>
  <Button outline color="warning">Warning</Button>
  <Button outline color="danger">Danger</Button>
</>
```

### Rounded buttons

Buttons can also turn rounded by using the `rounded` prop

```jsx
import { Button } from 'beautiful-ui';

<>
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
</>
```

### Button icon

It is possible to attach an icon to a button by passing both the icon name
or the instance of an `Icon` component.

<small>**Please note**: the `icon` prop accepts all the valid `font-awesome` icon names for it is abstracted
 on top of it.</small>

```jsx 
import { Button, Icon } from 'beautiful-ui';

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

### Sizes

Buttons can have different sizes

```jsx
import { Button } from 'beautiful-ui';

<>
  <Button size="small">Small size</Button>
  <Button size="default" color="primary">Default size</Button>
  <Button size="large" color="secondary">Large size</Button>
  <Button size="large" color="info" icon={['fab', 'react']}>Large with icon</Button>
  <Button size="default" color="success" icon="bell" />
  <Button size="small" color="warning" icon="heart" />
</>
```

### Block

full-width fluid buttons

```jsx
import { Button } from 'beautiful-ui';

<>
  <Button block>Block button</Button>
  <Button block color="primary">Block button</Button>
  <Button block color="secondary">Block button</Button>
  <Button block color="info">Block button</Button>
  <Button block color="success">Block button</Button>
  <Button block color="warning">Block button</Button>
  <Button block color="danger">Block button</Button>
</>
```

### Disabled state
```jsx
import { Button } from 'beautiful-ui';

<Button disabled>disabled</Button>
```

### Effects

It is possible to define the animation the button should perform on the `hover` event.

```jsx
import { Button } from 'beautiful-ui';

<>
  <Button color="primary" hover="round">I change shape</Button>
  <Button color="secondary" hover="float">I can float</Button>
  <Button color="info" hover="shrink">I can shrink</Button>
  <Button color="success" hover="zoom">I can zoom</Button>
  <Button color="warning" hover="reflection">I have a reflection</Button>
</>
```

### Click Action

Buttons are meant to have a callback attached

```
import { Button } from 'beautiful-ui';

const foo = event => { alert('Click'); };

<Button color="primary" onClick={foo}>Click me!</Button>
```

### Pills

It's possible to add a pill within a button to show further information.

```jsx
import { Pill, Button, Icon } from 'beautiful-ui';

<>
  <Button pill="New messages" icon="envelope" color="primary">Mail</Button>
  <Button pill={<Pill color="danger">5 spam</Pill>} icon="envelope" color="primary">Mail</Button>
  <Button color="info"><Pill color="warning">10 warnings</Pill>Manage <Icon name="bicycle" /></Button>
</>
```


### Spinners

It is possible to show a spinner glyph next to the label, possibly in case of loading data.<br/>

Similar to the `icon` prop, the `spinner` prop accepts both a boolean value or the instance of a `Spinner`
component. 

```jsx
import { Spinner, Button } from 'beautiful-ui';

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
