```jsx noeditor 
const Content = ({ style }) => (
   <div style={{ maxWidth: '100%', minHeight: '2.25rem', height:'100%', padding: '0.85rem', backgroundColor: '#38acff', borderRadius: '5px', boxSizing:'border-box', ...style }}>
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

### Size

```jsx
import { Grid } from 'beautiful-ui';

<Grid>
  <Grid.Column size="12"><Content /></Grid.Column>
  <Grid.Column size="11"><Content /></Grid.Column>
  <Grid.Column size="10"><Content /></Grid.Column>
</Grid>
```

### Responsive sizes

It’s possible to define the column size accordingly to the screen dimension by using on of the following props: 
`sm`, `md`, `lg`, `xl`.


```jsx
import { Grid } from 'beautiful-ui';
 
<Grid>
  <Grid.Column sm="12" md="8" lg="6" xl="3">
    <Content />
  </Grid.Column>
  <Grid.Column sm="12" md="4" lg="6" xl="3">
    <Content />
  </Grid.Column>
  <Grid.Column sm="12" md="8" lg="6" xl="3">
    <Content />
  </Grid.Column>
  <Grid.Column sm="12" md="4" lg="6" xl="3">
    <Content />
  </Grid.Column>
</Grid>
```

If not defined the column will adapt its length accordingly to the other columns. 

As per the following example:

```jsx
import { Grid } from 'beautiful-ui';
 
<Grid>
   <Grid.Column sm="12" md="8" lg="6" xl="3">
      <Content />
   </Grid.Column>
   <Grid.Column sm="12">
      <Content />
   </Grid.Column>
</Grid>
```

### Offset

The `offset` prop adds a left padding to the column.
An offset can also be defined accordingly to the screen dimension by using on of the following props: 
`sm`, `md`, `lg`, `xl`.

```jsx 
import { Grid } from 'beautiful-ui';

<Grid>
  <Grid.Column offset={3} xl={6}>
    <Content />
  </Grid.Column>
  <Grid.Column offset={9} offsetSm={1}>
    <Content />
  </Grid.Column>
  <Grid.Column offset={1} offsetMd={4}>
    <Content />
  </Grid.Column>
  <Grid.Column offset={1} offsetLg={5}>
    <Content />
  </Grid.Column>
</Grid>
```

### Grid Items Align

The `itemsAlign` prop could be used to set items in position accordingly to the grid's height.

```jsx 
import { Grid } from 'beautiful-ui';

<>
  <Grid itemsAlign="center" style={{height: '150px', background:"#afdeff", borderBottom:"solid white"}}>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
  </Grid>
  <Grid itemsAlign="end" style={{height: '150px', background:"#afdeff"}}>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
     <Grid.Column><Content /></Grid.Column>
  </Grid>
</>
```

### GridColumn Self Align

The `selfAlign` prop could be used to set items in position accordingly to the container's height.


```jsx 
import { Grid } from 'beautiful-ui';

<Grid itemsAlign="center" style={{height: '200px', background:'#afdeff', borderBottom:'solid white'}}>
   <Grid.Column selfAlign="stretch"><Content /> </Grid.Column>
   <Grid.Column selfAlign="center"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="end"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="start"> <Content /> </Grid.Column>
   <Grid.Column selfAlign="auto"> <Content /> </Grid.Column>
</Grid>
```
