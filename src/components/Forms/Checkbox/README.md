### Basic Usage:

```jsx
import { Checkbox } from 'beautiful-ui';

<Checkbox label="Check me if you can" />
```

### Controlled Input:

```jsx
import { Checkbox } from 'beautiful-ui';

const UncontrolledCheckbox = (props) => {
  const [value, setValue] = React.useState(false);

  return (<Checkbox value={value} onChange={(event, nextValue) => setValue(nextValue)} {...props} />);
}

<UncontrolledCheckbox label="Check me if you can" />
```

### Colors

```jsx
import { Checkbox } from 'beautiful-ui';

const UncontrolledCheckbox = (props) => {
  const [value, setValue] = React.useState(true);

  return (<Checkbox value={value} onChange={(event, nextValue) => setValue(nextValue)} label="Check me" {...props} />);
}

<>
  <UncontrolledCheckbox color="primary" />
  <UncontrolledCheckbox color="secondary" />
  <UncontrolledCheckbox color="info" />
  <UncontrolledCheckbox color="success" />
  <UncontrolledCheckbox color="warning" />
  <UncontrolledCheckbox color="danger" />
</>
```

### Disabled

```jsx
import { Checkbox } from 'beautiful-ui';

<Checkbox label="Check me if you can" disabled color="primary" />
```

### Help text

It's possible to show a help text giving further information right under the checkbox
by setting a `helpText` prop.

```jsx
import { Checkbox } from 'beautiful-ui';

const UncontrolledCheckbox = (props) => {
  const [value, setValue] = React.useState(true);

  return (<Checkbox value={value} onChange={(event, nextValue) => setValue(nextValue)} label="Check me" {...props} />);
}

<>
  <UncontrolledCheckbox color="primary" helpText="Lorem ipsum dolor sit amet" />
</>
```
