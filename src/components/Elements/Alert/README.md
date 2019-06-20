### Basic usage

``` jsx
<Alert>Some text</Alert>

```


### Alert Colors

Color highlight different alerts.

``` jsx
<>
<Alert color="primary">Some text</Alert>
<Alert color="secondary">Some text</Alert>
<Alert color="info">Some text</Alert>
<Alert color="warning">Some text</Alert>
<Alert color="danger">Some text</Alert>
<Alert color="success">Some text</Alert>
</>
```

### Solid brackground

A solid background style variant with white text and without border.
``` jsx
<>
<Alert color="default" solid="true">Some text</Alert>
<Alert color="primary" solid="true">Some text</Alert>
<Alert color="secondary" solid="true">Some text</Alert>
<Alert color="info" solid="true">Some text</Alert>
<Alert color="warning" solid="true">Some text</Alert>
<Alert color="danger" solid="true">Some text</Alert>
<Alert color="success" solid="true">Some text</Alert>
</>
```


### Outline

Shows the outline only.
``` jsx
<>
<Alert color="default" outline="true">Some text</Alert>
<Alert color="primary" outline="true">Some text</Alert>
<Alert color="secondary" outline="true">Some text</Alert>
<Alert color="info" outline="true">Some text</Alert>
<Alert color="warning" outline="true">Some text</Alert>
<Alert color="danger" outline="true">Some text</Alert>
<Alert color="success" outline="true">Some text</Alert>
</>
```

### Icons

Adding icon to different alert.
``` jsx
import {Icon} from 'beautiful-ui';
<>
<Alert color="primary" solid="true"><Icon name="info-circle" />Some text </Alert>
<Alert color="secondary" outline="true"><Icon name="heart" />Some text </Alert>
<Alert color="info"><Icon name="check" />Some text </Alert>
</>
```

### Closable button

Adding onClose prop, accept a function, and show button.
``` jsx
import { Button } from 'beautiful-ui';

const AlertReporter = (props) => {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <>
      {showAlert && <Alert {...props} onClose={() => setShowAlert(!showAlert)} />}
      <Button color="primary" disabled={showAlert} onClick={() => setShowAlert(!showAlert)}>
        {showAlert ? 'Alert shown' : 'Show the bloody alert'}
      </Button>
    </>
  );
};

<AlertReporter color="primary">Some text </AlertReporter>
```
