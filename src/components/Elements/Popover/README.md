### Basic Usage

The Popover component is built on top of the [FloatingContent](#/Components/Elements/Popover) component, so it 
requires the props `onToggle`, `isShown` and `trigger` to be defined.
<br/>
All the valid props of [FloatingContent](#/Components/Elements/Popover) are also valid for the Popover component.

```jsx
import { Popover, Button } from 'beautiful-ui';

const PopoverController = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popover {...props} onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      Lorem ipsum dolor sit amet.
    </Popover>
  );
};

<>
  <PopoverController trigger={<Button style={{ marginRight: '1rem' }}>Button trigger, click me</Button>} />
  <PopoverController trigger="String trigger, click me" />
</>
```


### Title

If defined the `title` prop adds a little title to the Popover:

```jsx
import { Button } from 'beautiful-ui';

const Trigger = (<Button>Show a popup with a title</Button>);

const PopoverController = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popover onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} {...props}>
      Lorem ipsum dolor sit amet.
    </Popover>
  );
};

<PopoverController title="A fancy title" trigger={Trigger} />
```

### Placement

The `placement` prop defines the position of the popover over the `trigger`:

```jsx
import { Button } from 'beautiful-ui';

const Trigger = ({ title }) => (
  <Button block color="primary">show a <strong>{title}</strong> placed popover</Button>
);

const PopoverController = ({ placement }) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popover onToggle={() => setIsOpen(!isOpen)} trigger={<Trigger title={placement} />} placement={placement} isOpen={isOpen}>
      Lorem ipsum dolor sit amet.
    </Popover>
  );
};

<>
  <PopoverController placement="top-left"/>
  <PopoverController placement="top-right"/>
  <PopoverController placement="top-center"/>
  <PopoverController placement="bottom-left"/>
  <PopoverController placement="bottom-right"/>
  <PopoverController placement="bottom-center"/>
  <PopoverController placement="left-center"/>
  <PopoverController placement="right-center"/>
</>
```


### Action

The `action` defines when to fire the `onToggle` callback, it can be `click` or `hover`.

```jsx
import { Button } from 'beautiful-ui';

const Trigger = ({ title }) => (
  <Button color="success" style={{marginRight: 12}}>show a popup on <strong>{title}</strong></Button>
);

const PopoverController = ({ action }) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popover onToggle={() => setIsOpen(!isOpen)} trigger={<Trigger title={action} />} isOpen={isOpen} action={action}>
      Lorem ipsum dolor sit amet.
    </Popover>
  );
};

<>
  <PopoverController action="hover"/>
  <PopoverController action="click"/>
</>
```
