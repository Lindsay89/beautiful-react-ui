### Basic Usage

To group a series of button just wrap 'em within a ButtonGroup component:

```jsx
import { ButtonGroup, Button } from 'beautiful-ui';

const someAction = alert.bind(null, 'Some Action');

<ButtonGroup>
  <Button onClick={someAction}>First button</Button>
  <Button onClick={someAction}>Second button</Button>
  <Button onClick={someAction}>Third button</Button>
</ButtonGroup>
```

### Block

full-width fluid button group

```jsx
import { ButtonGroup, Button } from 'beautiful-ui';

<ButtonGroup block>
  <Button icon="home">Home</Button>
  <Button icon="file">File</Button>
  <Button icon="paperclip">Paperclip</Button>
  <Button icon="coffee">Coffee</Button>
</ButtonGroup>
```

### Group Color

```jsx
import { ButtonGroup, Button } from 'beautiful-ui';

<>
  <ButtonGroup block color="primary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup block color="secondary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup block color="info">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup block color="warning">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup block color="success">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup block color="danger">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
</>
```

### Group Size

```jsx
import { ButtonGroup, Button } from 'beautiful-ui';

<>
  <ButtonGroup block size="small">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup color="primary" block size="default">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup color="info" block size="large">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
</>
```

### Group Outline

```jsx
import { ButtonGroup, Button } from 'beautiful-ui';

<>
  <ButtonGroup outline block color="primary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline block color="secondary">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline block color="info">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline block color="warning">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline block color="success">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
  <ButtonGroup outline block color="danger">
    <Button icon="home">Home</Button>
    <Button icon="file">File</Button>
    <Button icon="paperclip">Paperclip</Button>
    <Button icon="coffee">Coffee</Button>
  </ButtonGroup>
</>
```

### Group rounded

```jsx
import { ButtonGroup, Button } from 'beautiful-ui';

<ButtonGroup rounded color="primary">
  <Button icon="home">Home</Button>
  <Button icon="file">File</Button>
  <Button icon="paperclip">Paperclip</Button>
  <Button icon="coffee">Coffee</Button>
</ButtonGroup>
```
