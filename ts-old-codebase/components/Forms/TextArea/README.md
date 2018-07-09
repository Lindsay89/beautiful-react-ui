# To be completed

### Basic Usage

```
<TextArea />
```


### Label, placeholder and help text

Like most of the other Forms components, a TextArea may have a label, a placeholder and a help text:

```jsx
<TextArea label="Message:" placeholder="Dear Mr..." helpText="Some very helpful text" />
```

### Colors

You can define component's border and label color:

```jsx
<TextArea color="primary" label="Message:" placeholder="Dear colorful Mr...." />
<TextArea color="secondary" label="Message:" placeholder="Dear colorful Mr...." />
<TextArea color="info" label="Message:" placeholder="Dear colorful Mr...." />
<TextArea color="success" label="Message:" placeholder="Dear colorful Mr...." />
<TextArea color="warning" label="Message:" placeholder="Dear colorful Mr...." />
<TextArea color="danger" label="Message:" placeholder="Dear colorful Mr...." />
```

### Callbacks

onChange callback:
```jsx
class TextAreaOnTypingDemo extends React.Component {
	constructor(props) {
    	super(props);

        this.state = { value: null };
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleTyping(event, value) {
    	this.setState({value});
    }

    render() {
        const {value} = this.state;

    	return(
			<div>
            <TextArea onChange={this.handleTyping} {...this.props} />
            <p>{value ? `you typed: ${value}` : null}</p>
            </div>
        );
    }
}

<TextAreaOnTypingDemo label="Input some text:" />
```

### Standard textarea HTML tag props

The TextArea component accepts most of the standard `textarea` HTML attributes

**Rows and Cols**

Define the height by defining the rows:
```jsx
<TextArea label="With 10 rows:" placeholder="pretty long" rows={10} />
```

By design the TextArea will take all the available space as Beautiful UI
is a mobile-first library, it's possible to disable this feature by
setting a number of cols:

```jsx
<TextArea label="With 3 cols:" placeholder="pretty short" cols={3} />
```

**Disabled and required**

```jsx
<TextArea placeholder="Some placeholder" label="Disabled" disabled />
<TextArea placeholder="Some placeholder" label="Required" required />
```
