### Basic Usage

```jsx
import { Card, Avatar } from 'beautiful-ui';

<Card>
  <Card.Image src="https://placeimg.com/460/250/nature" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/nature/grayscale" /> 
    <p style={{display:"inline-block", marginLeft:"2rem"}}>Written by John Doe</p>
  </Card.Footer>
</Card>
```

### Fluid

The `fluid` prop will adapt the Card's width to its container.

```jsx
import { Card, Avatar } from 'beautiful-ui';

<Card fluid>
  <Card.Image src="https://placeimg.com/640/250/nature" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/nature/grayscale" /> 
    <p style={{display:"inline-block", marginLeft:"2rem"}}>Written by John Doe</p>
  </Card.Footer>
</Card>
```

### Text align

the `textAlign` prop is a valid prop for both Card component and its children, except for `Card.Image`, 
it allows to horizontally align the text.

```jsx
import { Card, Avatar } from 'beautiful-ui';

<Card textAlign="center">
  <Card.Image src="https://placeimg.com/460/250/nature" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer textAlign="left"> 
    <Avatar src="https://placeimg.com/96/96/nature/grayscale" /> 
    <p style={{display:"inline-block", marginLeft:"2rem"}}>Written by John Doe</p>
  </Card.Footer>
</Card>
```


### Orientation

The `horizontal` prop defines the card's orientation.

```jsx
import { Card, Pill } from 'beautiful-ui';

<Card horizontal>
  <Card.Image src="https://placeimg.com/640/800/nature" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> <Pill color="info"> Nature </Pill> </Card.Footer>
</Card>
```

### Reversed

The `reversed` prop flips the Card.Image position both from left to right or from top to bottom, according to the
defined orientation.

```jsx
import { Card, Pill, Alert, Icon } from 'beautiful-ui';

<>
  <Card horizontal reversed>
    <Card.Image src="https://placeimg.com/640/800" alt="Alt text" />
    <Card.Title> Title </Card.Title>
    <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
    <Card.Footer> 
      <Pill color="info"> Horizontal </Pill> 
      <Pill color="info"> Reversed </Pill> 
    </Card.Footer>
  </Card>
  
  <Card reversed style={{marginTop:"2rem"}}>
    <Card.Image src="https://placeimg.com/640/480" alt="Alt text" />
    <Card.Title> Title </Card.Title>
    <Card.Content> some content </Card.Content>
    <Card.Footer> 
      <Alert color="warning" outline> The image is below! 
        <Icon name="arrow-down" />
      </Alert>
    </Card.Footer>
  </Card>
</>
```

### Action Button

The `actionButton` prop will add a little menu-like icon to the top right of the card.

```jsx
import { Card, Avatar } from 'beautiful-ui';

<Card actionButton>
  <Card.Image src="https://placeimg.com/460/250/nature" alt="Alt text" />
  <Card.Title color="primary"> A fancy title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/nature/grayscale" /> 
    <p style={{display:"inline-block", marginLeft:"2rem"}}>Written by John Doe</p>
  </Card.Footer>
</Card>
```

### Action Button Icon

The `actionButtonIcon` prop allows to override the default action button's icon.

```jsx
import { Card, Avatar } from 'beautiful-ui';

<Card actionButton actionButtonIcon="arrow-down" horizontal>
  <Card.Image src="https://placeimg.com/640/800/animals" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/nature/grayscale" /> 
    <p style={{display:"inline-block", marginLeft:"2rem"}}>Written by John Doe</p>
  </Card.Footer>
</Card>
```

### Action Button onClick function

The `onActionButtonClick` prop defines the function to be performed when action button is clicked

```jsx
import { Card, Avatar } from 'beautiful-ui';

<Card actionButton onActionButtonClick={() => alert('new alert')}>
  <Card.Image src="https://placeimg.com/640/250/animals" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> 
    <Avatar src="https://placeimg.com/96/96/nature/grayscale" /> 
    <p style={{display:"inline-block", marginLeft:"2rem"}}>Written by John Doe</p>
  </Card.Footer>
</Card>
```

### Render

If defined, the `actionButtonRender` property will change the default actionButton behaviour.

```jsx
import { Icon, Button } from 'beautiful-ui';

ActionButtons = () => (
  <> 
    <Button icon="envelope" color="primary">Mail</Button>
    <Button icon="heart" color="primary" />
  </>
);

<>
<Card actionButton actionButtonRender={ActionButtons}>
  <Card.Image src="https://placeimg.com/460/250" alt="Alt text" />
  <Card.Title> Title </Card.Title>
  <Card.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. </Card.Content>
  <Card.Footer> Footer </Card.Footer>
</Card>
</>
```
