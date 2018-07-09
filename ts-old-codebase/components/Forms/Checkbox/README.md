Checkbox component

```jsx
class CheckboxController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {checked: false};
        this.handleChange = () => this.setState({checked: !this.state.checked});
    }

    render() {
        const {checked} = this.state;

        return <Checkbox checked={checked} onChange={this.handleChange} {...this.props} />
    }
}

<CheckboxController label="A default checkbox" />
```

```jsx
class CheckboxController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {checked: true};
        this.handleChange = () => this.setState({checked: !this.state.checked});
    }

    render() {
        const {checked} = this.state;

        return <Checkbox checked={checked} onChange={this.handleChange} {...this.props} />
    }
}

<>
<CheckboxController color="primary" label="Check me if you can" />
<CheckboxController color="secondary" label="Check me if you can" />
<CheckboxController color="info" label="Check me if you can" />
<CheckboxController color="success" label="Check me if you can" />
<CheckboxController color="warning" label="Check me if you can" />
<CheckboxController color="danger" label="Check me if you can" />
</>
```

```jsx
class CheckboxController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {checked: true};
        this.handleChange = () => this.setState({checked: !this.state.checked});
    }

    render() {
        const {checked} = this.state;

        return <Checkbox checked={checked} onChange={this.handleChange} {...this.props} />
    }
}

<>
<CheckboxController rounded color="primary" label="Check me if you can" />
<CheckboxController rounded color="secondary" label="Check me if you can" />
<CheckboxController rounded color="info" label="Check me if you can" />
<CheckboxController rounded color="success" label="Check me if you can" />
<CheckboxController rounded color="warning" label="Check me if you can" />
<CheckboxController rounded color="danger" label="Check me if you can" />
</>
```
