## Basic Usage

```jsx
const SomeBox = (props) => (<div style={{padding: '20px', background: props.bg, margin: '5px 0', textAlign: 'center'}}>{props.children}</div>);


<Grid>
    <Grid.Col size={1}>
        <SomeBox bg="#60bdff">full length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={2}>
        <SomeBox bg="#88cdff">half length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={2}>
        <SomeBox bg="#60bdff">half length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={3}>
        <SomeBox bg="#88cdff">1/3 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={3}>
        <SomeBox bg="#60bdff">1/3 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={3}>
        <SomeBox bg="#88cdff">1/3 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={4}>
        <SomeBox bg="#60bdff">1/4 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={4}>
        <SomeBox bg="#88cdff">1/4 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={4}>
        <SomeBox bg="#60bdff">1/4 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={4}>
        <SomeBox bg="#88cdff">1/4 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={5}>
        <SomeBox bg="#88cdff">1/5 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={5}>
        <SomeBox bg="#60bdff">1/5 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={5}>
        <SomeBox bg="#88cdff">1/5 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={5}>
        <SomeBox bg="#60bdff">1/5 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={5}>
        <SomeBox bg="#88cdff">1/5 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={6}>
        <SomeBox bg="#60bdff">1/6 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={6}>
        <SomeBox bg="#88cdff">1/6 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={6}>
        <SomeBox bg="#60bdff">1/6 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={6}>
        <SomeBox bg="#88cdff">1/6 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={6}>
        <SomeBox bg="#60bdff">1/6 length item</SomeBox>
    </Grid.Col>
    <Grid.Col size={6}>
        <SomeBox bg="#88cdff">1/6 length item</SomeBox>
    </Grid.Col>
</Grid>
```

