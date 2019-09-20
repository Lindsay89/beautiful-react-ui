```jsx noeditor 
const Content = () => (
   <div style={{ maxWidth: '100%', minHeight: '2.25rem', height:'100%', padding: '0.85rem', backgroundColor: '#FF4365', borderRadius: '5px', boxSizing:'border-box' }}>
      Content
   </div>
);

window.Content = Content;
```

### Basic usage

A `Grid` component can be used to build layouts based on a 12-columns system.

```jsx
import { Grid } from 'beautiful-ui';

<Grid>
  <Grid.Column><Content /></Grid.Column>
  <Grid.Column><Content /></Grid.Column>
  <Grid.Column><Content /></Grid.Column>
</Grid>
```

### Column size

It’s possible to define the column size accordingly to the screen dimension by using on of the following props: `sm`, `md`, `lg`, `xl`.

```jsx
import { Grid } from 'beautiful-ui';
 
<Grid>
   <Grid.Column sm={6} md={1} lg={7} xl={12}> <Content /> </Grid.Column>
   <Grid.Column sm={6}> <Content /> </Grid.Column>
   <Grid.Column sm={10}> <Content /> </Grid.Column>
</Grid>
```

### Offset

The `offset` prop add a padding left to columns.
It’s even possible to define the offset dimension accordingly to the screen dimension by using on of the following props: `sm`, `md`, `lg`, `xl`.

```jsx 
import { Grid } from 'beautiful-ui';

<Grid>
   <Grid.Column offset={3} xl={6}> <Content /> </Grid.Column>
   <Grid.Column offset={9} offsetSm={1}> <Content /> </Grid.Column>
   <Grid.Column offset={1} offsetMd={4}> <Content /> </Grid.Column>
   <Grid.Column offset={1} offsetLg={5}> <Content /> </Grid.Column>
</Grid>
```

### Grid Items Align

The `itemsAlign` prop is a Grid prop that could be use to get in position grid's items.

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

The `selfAlign` prop is a GridColumn prop that could be use to move the grid's items into the grid container.

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