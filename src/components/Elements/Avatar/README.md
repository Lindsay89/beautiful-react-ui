### Basic usage with image

```jsx
import { Avatar } from 'beautiful-ui';

<Avatar src="https://placeimg.com/96/96/people" />
```

### Basic usage with initials

```jsx
import { Avatar } from 'beautiful-ui';

<Avatar initials="ar" />
```

### Shapes

```jsx
import { Avatar } from 'beautiful-ui';

<>
  <Avatar src="https://placeimg.com/96/96/people" shape="rounded" />
  <Avatar initials="ar" shape="square" />
</>
```

### Sizes

```jsx
import { Avatar } from 'beautiful-ui';

<>
  <Avatar initials="ar" size="small" />
  <Avatar initials="ar" size="default" />
  <Avatar initials="ar" size="large" />
</>
```

### Pills

```jsx
import { Avatar, Pill } from 'beautiful-ui';

<>
  <Avatar src="https://placeimg.com/96/96/people" pill="10" />
  <Avatar initials="ar" pill={<Pill color="primary">10</Pill>} />
</>
```

### Avatar state

```jsx
import { Avatar, Pill } from 'beautiful-ui';

<>
  <Avatar initials="ar" state="offline" />
  <Avatar src="https://placeimg.com/96/96/people" state="online" />
  <Avatar src="https://placeimg.com/96/96/people" state="danger" />
</>
```


## Additional information

Avatar component is meant to show the user's profile picture or its initials, 
sometimes further descriptions are needed.


### Display name

```jsx
import { Avatar, Pill } from 'beautiful-ui';

<>
  <Avatar src="https://placeimg.com/96/96/people" displayName="John Doe" />
</>
```

### Further info

In addition to `displayName` we can possibly add further user information such as
the user role or the user email by using the `furtherInfo` prop`

```jsx
import { Avatar, Pill } from 'beautiful-ui';

<>
  <Avatar src="https://placeimg.com/96/96/people" displayName="John Doe" furtherInfo="Admin" />
</>
```
