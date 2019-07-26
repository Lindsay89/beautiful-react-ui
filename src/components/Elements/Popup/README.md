### Basic Usage

To start using a Popup we should define a `trigger` node to apply the popup to.
<br/>
As the Popup component is a controlled component we should possibly defined the `onToggle`
and `isOpen` props.

```jsx
import { Button, Icon } from 'beautiful-ui';

const PopupController = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popup {...props} onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      Lorem ipsum dolor sit amet.
    </Popup>
  );
};

<>
  <PopupController trigger={<Button>Button trigger, click me</Button>} />
  <PopupController trigger="String trigger, click me" />
</>
```


### Title

The `title` prop defines a title to be added to our popup:

```jsx
import { Button } from 'beautiful-ui';

const Trigger = (<Button>Show a popup with a title</Button>);

const PopupController = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popup onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} {...props}>
      Lorem ipsum dolor sit amet.
    </Popup>
  );
};

<PopupController title="a fancy title" trigger={Trigger} />
```

### Placement

The `placement` prop defines the position of the popup:

```jsx
import { Button } from 'beautiful-ui';

const Trigger = ({ title }) => (
  <Button block color="primary">show a <strong>{title}</strong> placed popup</Button>
);

const PopupController = ({ placement }) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popup onToggle={() => setIsOpen(!isOpen)} trigger={<Trigger title={placement} />} placement={placement} isOpen={isOpen}>
      Lorem ipsum dolor sit amet.
    </Popup>
  );
};

<>
  <PopupController placement="top-left"/>
  <PopupController placement="top-right"/>
  <PopupController placement="top-center"/>
  <PopupController placement="bottom-left"/>
  <PopupController placement="bottom-right"/>
  <PopupController placement="bottom-center"/>
  <PopupController placement="left-center"/>
  <PopupController placement="right-center"/>
</>
```


### Action

The `action` defines when to fire the `onToggle` callback, can be `click` or `hover`.

```jsx
import { Button } from 'beautiful-ui';

const Trigger = ({ title }) => (
  <Button color="success" style={{marginRight: 12}}>show a popup on <strong>{title}</strong></Button>
);

const PopupController = ({ action }) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popup onToggle={() => setIsOpen(!isOpen)} trigger={<Trigger title={action} />} isOpen={isOpen} action={action}>
      Lorem ipsum dolor sit amet.
    </Popup>
  );
};

<>
  <PopupController action="hover"/>
  <PopupController action="click"/>
</>
```


### No arrow

If set to `true` the `hideArrow` prop hides the little arrow generally shown to point the trigger.

```jsx
import { Button } from 'beautiful-ui';

const Trigger = (<Button>Show a popup without arrow</Button>);

const PopupController = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popup onToggle={() => setIsOpen(!isOpen)} trigger={Trigger} isOpen={isOpen} {...props}>
      Lorem ipsum dolor sit amet.
    </Popup>
  );
};

<PopupController hideArrow={true}/>
```


### Offset

The `offset` defines a number in pixel to possibly separate the popup from the trigger

```jsx
import { Button } from 'beautiful-ui';

const Trigger = (<Button>Show a popup with a 40px offset</Button>);

const PopupController = (props) => {
  const [isOpen, setIsOpen] = React.useState(false); 

  return (
    <Popup onToggle={() => setIsOpen(!isOpen)} trigger={Trigger} isOpen={isOpen} {...props}>
      Lorem ipsum dolor sit amet.
    </Popup>
  );
};

<PopupController offset={40}/>
```
