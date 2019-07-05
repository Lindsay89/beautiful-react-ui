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
