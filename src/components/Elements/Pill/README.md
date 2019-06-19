### Basic Usage

wrap a text within a Pill component

```jsx
import { Pill } from 'beautiful-ui';

<Pill>some label</Pill>
```

### Colors

The `color` prop changes the appearance of a pill

``` jsx
import { Pill } from 'beautiful-ui';

<>
  <Pill color="default">default</Pill>
  <Pill color="primary">primary</Pill>
  <Pill color="secondary">secondary</Pill>
  <Pill color="info">info</Pill>
  <Pill color="warning">warning</Pill>
  <Pill color="danger">danger</Pill>
</>
```

### Links

The `href` prop providers an actionable pill

```jsx
import { Pill } from 'beautiful-ui';

<>
  <Pill color="default" href="#">default</Pill>
  <Pill color="primary" href="#">primary</Pill>
  <Pill color="secondary" href="#">secondary</Pill>
  <Pill color="info" href="#">info</Pill>
  <Pill color="warning" href="#">warning</Pill>
  <Pill color="danger" href="#">danger</Pill>
</>
```
### Render

Render change the normal behaviour of the component.

```jsx
const CustomLink = (props) => (<a href="/some-custom-link">Link to: {props.children}</a>);

<>
  <Pill render={CustomLink}>Some page</Pill>
</>
```
