### Basic usage

As the Accordion is a controlled component, we need to wrap it within a stateful one

```jsx
import { Accordion } from 'beautiful-ui';

/**
 * Since Accordion is a controlled component, an uncontrolled accordion 
 * has been created for the example purpose.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState(0);

  const onChangeHandler = (e, id) => {
     setCurrent(id === current ? null : id);
  };

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Content title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin at ex nec tellus blandit ultricies. Nulla facilisi. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Sed finibus, est sed interdum feugiat, metus diam laoreet lacus, ut viverra ex tellus vitae lorem.
      </Accordion.Content>
      <Accordion.Content title="Content title">
        Vivamus sed condimentum risus. Nullam pretium dolor ut odio vestibulum eleifend. 
        Donec vulputate, lectus non sollicitudin ullamcorper, neque tellus facilisis mauris, a vehicula justo diam ut diam. 
        Suspendisse id sapien congue, consequat dui et, vulputate mauris.
      </Accordion.Content>
      <Accordion.Content title="Content title">
        Quisque tellus nunc, pharetra vel massa nec, elementum tincidunt purus. 
        Etiam id orci eu ex volutpat vehicula. Nullam blandit nibh venenatis, elementum arcu vel, vestibulum purus. 
        Mauris eu augue eu mi faucibus viverra.
      </Accordion.Content>
    </Accordion>
  );
};


<UncontrolledAccordion />
```

### Color

The `color` prop defines the accordion title color

```jsx
import { Accordion } from 'beautiful-ui';

/**
 * Since Accordion is a controlled component, an uncontrolled accordion 
 * has been created for the example purpose.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState(0);

  const onChangeHandler = (e, id) => {
     setCurrent(id === current ? null : id);
  };

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Content title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin at ex nec tellus blandit ultricies. Nulla facilisi. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Sed finibus, est sed interdum feugiat, metus diam laoreet lacus, ut viverra ex tellus vitae lorem.
      </Accordion.Content>
      <Accordion.Content title="Content title">
        Vivamus sed condimentum risus. Nullam pretium dolor ut odio vestibulum eleifend. 
        Donec vulputate, lectus non sollicitudin ullamcorper, neque tellus facilisis mauris, a vehicula justo diam ut diam. 
        Suspendisse id sapien congue, consequat dui et, vulputate mauris.
      </Accordion.Content>
      <Accordion.Content title="Content title">
        Quisque tellus nunc, pharetra vel massa nec, elementum tincidunt purus. 
        Etiam id orci eu ex volutpat vehicula. Nullam blandit nibh venenatis, elementum arcu vel, vestibulum purus. 
        Mauris eu augue eu mi faucibus viverra.
      </Accordion.Content>
    </Accordion>
  );
};

<>
  <UncontrolledAccordion color="primary" />
  <UncontrolledAccordion color="secondary" />
  <UncontrolledAccordion color="info" />
  <UncontrolledAccordion color="success" />
  <UncontrolledAccordion color="warning" />
  <UncontrolledAccordion color="danger" />
</>
```

### With list

```jsx
import { Accordion, List } from 'beautiful-ui';

/**
 * Since Accordion is a controlled component, an uncontrolled accordion 
 * has been created for the example purpose.
 */ 
const UncontrolledAccordion = (props) => {
  const [current, setCurrent] = React.useState(0);

  const onChangeHandler = (e, id) => {
     setCurrent(id === current ? null : id);
  };

  return (
    <Accordion onChange={onChangeHandler} active={current} {...props}>
      <Accordion.Content title="Content title">
        <List>
          <List.Item>List item 1</List.Item>
          <List.Item>List item 2</List.Item>
          <List.Item>List item 3</List.Item>
        </List>
      </Accordion.Content>
      <Accordion.Content title="Content title">
        <List>
         <List.Item>List item 4</List.Item>
         <List.Item>List item 5</List.Item>
         <List.Item>List item 6</List.Item>
       </List>
      </Accordion.Content>
    </Accordion>
  );
};

<UncontrolledAccordion />
```
