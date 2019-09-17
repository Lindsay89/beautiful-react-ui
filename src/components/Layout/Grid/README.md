```jsx noeditor 
const Content = () => (<div style={{ maxWidth: '100%', height: '2.25rem', padding: '0.85rem', backgroundColor: '#D4DF31', borderRadius: '5px' }}>Content</div>);

window.Content = Content;
```

### Basic usage


```jsx



<Grid>
   <Grid.Column> <Content /> </Grid.Column>
   <Grid.Column> <Content /> </Grid.Column>
</Grid>

```