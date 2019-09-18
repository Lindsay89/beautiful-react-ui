```jsx noeditor 
const Content = () => (<div style={{ maxWidth: '100%', minHeight: '2.25rem', padding: '0.85rem', backgroundColor: '#FF4365', borderRadius: '5px' }}>Content</div>);

window.Content = Content;
```

### Basic usage


```jsx
import { Grid } from 'beautiful-ui';

<Grid>
  <Grid.Column><Content /></Grid.Column>
  <Grid.Column><Content /></Grid.Column>
  <Grid.Column><Content /></Grid.Column>
</Grid>
```

### Column size

```jsx
import { Grid } from 'beautiful-ui';
 
<Grid>
   <Grid.Column sm={6} md={1} lg={7} xl={12}> <Content /> </Grid.Column>
   <Grid.Column sm={6}> <Content /> </Grid.Column>
   <Grid.Column sm={10}> <Content /> </Grid.Column>
</Grid>
```

### Offset

```jsx 
<Grid>
   <Grid.Column offset={3} xl={6}> <Content /> </Grid.Column>
   <Grid.Column offset={9}> <Content /> </Grid.Column>
   <Grid.Column offset={1}> <Content /> </Grid.Column>
   <Grid.Column offset={1}> <Content /> </Grid.Column>
</Grid>
```
