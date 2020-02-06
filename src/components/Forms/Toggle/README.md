### ✅ Basic usage:
    
Since Toggle is a controlled component, it needs to be wrapped it into an uncontrolled one providing its state.

```jsx 
import { useState, useCallback } from 'react';
import { Toggle } from 'beautiful-react-ui';

const UncontrolledToggle = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <Toggle value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledToggle />
```

### 🎨 Colors

```jsx 
import { useState, useCallback } from 'react';
import { Toggle } from 'beautiful-react-ui';

<>
    <Toggle value={true} color="default" />
    <Toggle value={true} color="primary" />
    <Toggle value={true} color="secondary" />
    <Toggle value={true} color="info" />
    <Toggle value={true} color="success" />
    <Toggle value={true} color="warning" />
    <Toggle value={true} color="danger" />
</>
```

### Switch render

```jsx 
import { useState, useCallback } from 'react';
import { Toggle, Icon } from 'beautiful-react-ui';

const CustomSwitch = (props) => (
    <div {...props}><Icon name="rocket" style={{height: '100%', margin: 'auto', display: 'block'}}/></div>
)


const UncontrolledToggle = (props) => {
    const [toggled, setValue] = useState(false);

    const onChangeHandler = useCallback((event, nextValue) => {
        setValue(nextValue);
    }, [toggled]);

    return <Toggle value={toggled} onChange={onChangeHandler} {...props} />
};

<UncontrolledToggle SwitchRender={CustomSwitch} />
```

### 🎓 Handlers:

- `onChange`: fires when clicking on the switch toggle

### 🎓 Renderers:

- `SwitchRender`: define the toggle switch component
