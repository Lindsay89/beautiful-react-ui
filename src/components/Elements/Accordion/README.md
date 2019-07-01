### Basic usage

As the Accordion is a controlled component, we need to wrap it within a stateful one

```jsx
// stateful accordion component
const AccordionStateful = () => {
  const [current, setCurrent] = React.useState(0);

  return (
    <Accordion onChange={setCurrent} active={current}>
      <Accordion.Content title="fancy title">
        <div>
          <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? </p>
        </div>
      </Accordion.Content>
      <Accordion.Content title="a different fancy title">
        <div>
          <p>Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p>
        </div>
      </Accordion.Content>
      <Accordion.Content title="a new different fancy title">
        <div>
          <p> The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</p>
        </div>
      </Accordion.Content>
    </Accordion>
  );
};


<AccordionStateful />
```


### Colors

The `color` prop defines both the accordion background color and its contents color.

```jsx
// stateful accordion component
const AccordionStateful = (props) => {
  const [current, setCurrent] = React.useState(0);

  return (
    <Accordion {...props} onChange={setCurrent} active={current}>
      <Accordion.Content title="fancy title">
        <div>
          <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? </p>
        </div>
      </Accordion.Content>
      <Accordion.Content title="a different fancy title">
        <div>
          <p>Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p>
        </div>
      </Accordion.Content>
      <Accordion.Content title="a new different fancy title">
        <div>
          <p> The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</p>
        </div>
      </Accordion.Content>
    </Accordion>
  );
};

<>
  <AccordionStateful color="primary" />
  <AccordionStateful color="secondary" />
  <AccordionStateful color="info" />
  <AccordionStateful color="success" />
  <AccordionStateful color="warning" />
  <AccordionStateful color="danger" />
</>
```

### Icons

It is possible to override the standard icons by passing using the `iconOpen` and `iconClose` props. 
The both of them accept an icon name, an icon names array or the instance of an ``Icon``  component.

```jsx
import { Icon } from 'beautiful-ui';

// stateful accordion component
const AccordionStateful = (props) => {
  const [current, setCurrent] = React.useState(0);

  return (
    <Accordion {...props} onChange={setCurrent} active={current}>
      <Accordion.Content title="fancy title">
        <div>
          <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? </p>
        </div>
      </Accordion.Content>
      <Accordion.Content title="a different fancy title">
        <div>
          <p>Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p>
        </div>
      </Accordion.Content>
      <Accordion.Content title="a new different fancy title">
        <div>
          <p> The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</p>
        </div>
      </Accordion.Content>
    </Accordion>
  );
};


<AccordionStateful iconOpen="angle-double-up" iconClose={<Icon name="angle-double-down" />} />
```
