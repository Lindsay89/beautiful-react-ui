### Basic Usage

```jsx
const Target = (
<div style={{padding: '20px', backgroundColor: '#7bebc9', color: 'white'}}>
    Click here
</div>
);


<FloatNear render={Target}>
    <div style={{padding: '10px', backgroundColor: 'white', border: '1px solid'}}>
        <p>Some floating content</p>
        <Button>Some button</Button>
    </div>
</FloatNear>
```

### Floating position

Float at left

```jsx
const Target = (
<div style={{padding: '20px', backgroundColor: '#ffcc9d', color: 'white'}}>
    Click here, float left
</div>
);


<FloatNear render={Target} floatAt='left'>
    <div style={{padding: '10px', backgroundColor: 'white', border: '1px solid'}}>
        <p>Some floating content</p>
        <Button>Some button</Button>
    </div>
</FloatNear>
```

Float at right

```jsx
const Target = (
<div style={{padding: '20px', backgroundColor: '#ffcc9d', color: 'white'}}>
    Click here, float right
</div>
);


<FloatNear render={Target} floatAt='right'>
    <div style={{padding: '10px', backgroundColor: 'white', border: '1px solid'}}>
        <p>Some floating content</p>
        <Button>Some button</Button>
    </div>
</FloatNear>
```

Float at center, default

```jsx
const Target = (
<div style={{padding: '20px', backgroundColor: '#ffcc9d', color: 'white'}}>
    Click here, float center
</div>
);


<FloatNear render={Target} floatAt='center'>
    <div style={{padding: '10px', backgroundColor: 'white', border: '1px solid'}}>
        <p>Some floating content</p>
        <Button>Some button</Button>
    </div>
</FloatNear>
```


### Float event

The default floating event it's 'click', it's possible to change it to 'hover'

```jsx
const Target = (
<div style={{padding: '20px', backgroundColor: '#cbb7ef', color: 'white'}}>
    Click here, float center
</div>
);


<FloatNear render={Target} floatOn='hover'>
    <div style={{padding: '10px', backgroundColor: 'white', border: '1px solid'}}>
        <p>Some floating content</p>
        <Button>Some button</Button>
    </div>
</FloatNear>
```


## The Ref issue:
----

**Please note**:
the FloatNear uses a React.createRef() generated reference to refer to
the render prop component's node, thus it assumes that at least the
first element of the children is a valid DOM node, not a React component's
instance.

For example, the following code will work properly as a ref will be
applied to the first render prop's div:
```jsx static

<FloatNear render={<div>Some HTML tag component</div>}>
   <div>
     Some generic content
   </div>
</FloatNear>
```

The following code will not work as a ref will be applied to
`<SomeComponent />` but `ref` itself is not a valid SomeComponent's prop:
```jsx static

<FloatNear render={<SomeComponent />}>
  <div>
    Some generic content
  </div>
</FloatNear>
```

**Workaround**:
A valid, and actually suggested, workaround will be to wrap the render
prop's component within a React.forwardRef:
```jsx static

const SomeRefForwardingComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <SomeOtherComponent {...props} />
  </div>
));

<FloatNear render={<SomeRefForwardingComponent />}>
  <div>
    Some generic content
  </div>
</FloatNear>

```
