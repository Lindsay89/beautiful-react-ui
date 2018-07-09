### Basic Usage

```jsx
const options = [
  {value: 'option1', label: 'Option'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}


<StatefulSelect options={options} />
```

Since the Select component is a *controlled* component (like any other
Form components of this library), it's possible to pre-select options:

```jsx
const options = [
  {value: 'option1', label: '😃 Option'},
  {value: 'option2', label: '😎 Option 2'},
  {value: 'option3', label: '😆️ Option 3'},
  {value: 'option4', label: '😍 Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option2' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}


<StatefulSelect options={options} />
```

### Disable Options:

Disabling an option is possible by adding a `disabled: true`
property to it:

```jsx
const options = [
  {value: 'option1', label: '😃 Option'},
  {value: 'option2', label: '😎 Option 2'},
  {value: 'option3', label: '⛔️ Option 3', disabled: true},
  {value: 'option4', label: '😍 Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option4' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}


<StatefulSelect options={options} />
```

### Label, placeholder and help text

A Select Component may have a label, a placeholder and a help text:

```jsx
const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky'},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage', disabled: true},
  {value: 'track10', label: 'Eclipse'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}

<StatefulSelect label="Select track:" placeholder="The darkside of the moon" helpText="Select your favourite song"  options={options} />
```


### Colors

You can define Select component's color:

```jsx
const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky', selected: true},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage', disabled: true},
  {value: 'track10', label: 'Eclipse'},
];

class ColoredStatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        label="Select track:"
        placeholder="The darkside of the moon"
        helpText="Select your favourite song"
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
        options={options}
      />
    );
  }
}

<>
  <ColoredStatefulSelect color="primary" />
  <ColoredStatefulSelect color="secondary" />
  <ColoredStatefulSelect color="info" />
  <ColoredStatefulSelect color="success" />
  <ColoredStatefulSelect color="warning" />
  <ColoredStatefulSelect color="danger" />
</>
```

### Outlines

```jsx
const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky', selected: true},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage', disabled: true},
  {value: 'track10', label: 'Eclipse'},
];

class OutlinedStatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        label="Select track:"
        placeholder="The darkside of the moon"
        helpText="Select your favourite song"
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
        outline
        options={options}
      />
    );
  }
}

<>
  <OutlinedStatefulSelect color="primary" />
  <OutlinedStatefulSelect color="secondary" />
  <OutlinedStatefulSelect color="info" />
  <OutlinedStatefulSelect color="success" />
  <OutlinedStatefulSelect color="warning" />
  <OutlinedStatefulSelect color="danger" />
</>
```


### Size and fluidity

By design the Select component takes all the available space as per
Beautiful-UI is a mobile-first UI library.
It's possible to disable this feature by setting `fluid` to false:

```
const options = [
  {value: 'option1', label: 'Option'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option4' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}

<StatefulSelect options={options} fluid={false} />
```

it's also possible to define the component's size:

```
const options = [
  {value: 'option1', label: 'Option'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option4' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}

<>
  <StatefulSelect placeholder="Small size" options={options} color="primary" size="small" fluid={false} />
  <StatefulSelect placeholder="Default size" options={options} color="primary" size="default" fluid={false} />
  <StatefulSelect placeholder="Large size" options={options} color="primary" size="large" fluid={false} />
</>
```

### Dividers

```jsx
const options = [
  {value: 'option1', label: 'Option'},
  {value: 'option2', label: 'Option 2'},
  {divider: true},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option4' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}

<StatefulSelect options={options} />
```

### Disable and Spinner

It's possible to disable a Select by setting the `disabled` prop to `true`:

```jsx
const options = [
  {value: 'option1', label: 'Option'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option4' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}

<StatefulSelect options={options} disabled />
```


as well as showing a Spinner by passing the instance of a Spinner
component as `spinner` prop or simply set it to true:

```jsx

const options = [
  {value: 'option1', label: 'Option'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'},
  {value: 'option4', label: 'Option 4'},
];

class StatefulSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 'option4' };
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        {...this.props}
        value={value}
        onChange={(event, { value }) => this.setState({ value })}
        onRemove={() => this.setState({value: undefined})}
      />
    );
  }
}

<>
  <StatefulSelect options={options} disabled spinner />
  <StatefulSelect options={options} color="primary" disabled spinner />
  <StatefulSelect options={options} color="warning" disabled spinner={<Spinner type="dots" color="danger" />} />
</>

```

### Callbacks

onChange callback:

```jsx
const showAlert = (event, option) => alert(`Your favourite track is: ${option.label}`);

const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky'},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage'},
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Select your favourite track:" options={options} onChange={showAlert} />
```

onToggle callback:

```jsx
const showAlert = (event, state) => alert(`The current toggle state is: "${state ? 'open' : 'closed' }"`);

const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky'},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage'},
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Select your favourite track:" options={options} onToggle={showAlert} />
```

onRemove callback:

```jsx
const showAlert = (event, state) => alert("You just clicked on the remove button");

const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky'},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage'},
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Click on the remove button" options={options} value='track3' onRemove={showAlert} />
```

## Multiple Selection (Multi Select)

It's also possible to select more than one option at a time by setting the `multi` prop to true

```jsx
const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky' },
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage' },
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Select tracks:" helpText="Select one or more options" color="primary" options={options} multi />
```

### Multi Select style

By default, the selected options will be shown as a comma separated list.
It's possible to define a `tags` style by setting the `multiStyle` prop to **"tabs"** as per the example

```jsx
const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky' },
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage' },
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Select tracks:" helpText="Select one or more options" color="primary" options={options} multi multiStyle="tabs" />
```

### Preselect multiple values:
```jsx
const options = [
  {value: 'track1', label: 'Speak to Me', selected: true},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time', selected: true},
  {value: 'track5', label: 'The Great Gig in the Sky' },
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them', selected: true},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage' },
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Select tracks:" helpText="Select one or more options" color="primary" options={options} multi />
```

## Filtrable Select

```jsx
const options = [
  {value: 'track1', label: 'Speak to Me'},
  {value: 'track2', label: 'Breathe (In The Air)'},
  {value: 'track3', label: 'On The Run'},
  {value: 'track4', label: 'Time'},
  {value: 'track5', label: 'The Great Gig in the Sky'},
  {value: 'track6', label: 'Money'},
  {value: 'track7', label: 'Us and Them'},
  {value: 'track8', label: 'Any Colour You Like'},
  {value: 'track9', label: 'Brain Damage'},
  {value: 'track10', label: 'Eclipse'},
];

<Select label="Select track:" helpText="Use the filter to quick search your track" color="primary" options={options} filtrable />
```

## Localization:

The component specifically uses 2 labels: one in case none of the elements is selected while no placeholder has been defined, and one in case the search shows no results.
You can locate these strings using the following 2 props: `labelNothingSelect` and `labelNoItemsFound`.


```jsx
const options = [
  {value: 'option1', label: '🇮🇹  Option'},
  {value: 'option2', label: '🇮🇹  Option 2'},
  {value: 'option3', label: '🇮🇹  Option 3'},
  {value: 'option4', label: '🇮🇹  Option 4'},
];

<Select options={options} filtrable labelNothingSelect="🇮🇹 Non hai selezionato niente" labelNoItemsFound="Nessun elemento trovato" />
```
