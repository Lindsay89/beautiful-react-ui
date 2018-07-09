### Forms

```
class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {input: '', select: ''};
  }

  render() {
    const {input, select} = this.state;

    return (
      <>
        <Input
          label='Name'
          placeholder='Your name'
          helpText='Your name'
          value={state.input}
        />
        <Select
          options={[{label:'Option1', value:'option1'}]}
          value={select}
        />
        <Button color="primary">Send email</Button>
      </>
    );
  }
}


<Form />

```
