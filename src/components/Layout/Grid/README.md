```jsx noeditor 
const Content = () => (
   <div style={{ maxWidth: '100%', minHeight: '2.25rem', height:'100%', padding: '0.85rem', backgroundColor: '#FF4365', borderRadius: '5px', boxSizing:'border-box' }}>
      Content
   </div>
);

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
import { Grid } from 'beautiful-ui';

<Grid>
   <Grid.Column offset={3} xl={6}> <Content /> </Grid.Column>
   <Grid.Column offset={9}> <Content /> </Grid.Column>
   <Grid.Column offset={1}> <Content /> </Grid.Column>
   <Grid.Column offset={1}> <Content /> </Grid.Column>
</Grid>
```

### Grid Items Align

```jsx 
import { Grid } from 'beautiful-ui';
<>
<Grid itemsAlign="center" style={{height: '150px', background:"purple", borderBottom:"solid white"}}>
   <Grid.Column> <Content /> </Grid.Column>
   <Grid.Column> <Content /> </Grid.Column>
   <Grid.Column> <Content /> </Grid.Column>
</Grid>
<Grid itemsAlign="end" style={{height: '150px', background:"purple"}}>
   <Grid.Column> <Content /> </Grid.Column>
   <Grid.Column> <Content /> </Grid.Column>
   <Grid.Column> <Content /> </Grid.Column>
</Grid>
</>
```

### GridColumn Self Align

```jsx 
import { Grid } from 'beautiful-ui';
<Grid itemsAlign="center" style={{height: '200px', background:'purple', borderBottom:'solid white'}}>
   <Grid.Column selfAlign="stretch"><Content /> </Grid.Column>
   <Grid.Column selfAlign="center"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="end"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="start"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="auto"> <Content /> </Grid.Column>
</Grid>
```