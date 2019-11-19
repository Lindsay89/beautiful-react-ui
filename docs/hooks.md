Building `beautiful-ui` requires a number of internal utilities such as hooks. 

Some of them are exported for the developers to use.


### useWindowResize

Accepts a callback to be fired when the window size changes.

The given callback will be debounced with a 150 milliseconds delay to avoid poor performances behavior.

```
import { Paragraph, useWindowResize } from 'beautiful-ui';

/**
 * using useWindowResize hook to perform a callback on window resize
 */ 
const WindowSizeReporter = () => {
  const [wSize, setWSize] = React.useState([window.innerWidth, window.innerHeight]);

  // sets the current window size
  useWindowResize(() => {
    setWSize([window.innerWidth, window.innerHeight]);
  });


  return (
    <Paragraph color="primary">
      The current window size is: {wSize[0]}x{wSize[1]}px
    </Paragraph>
  );
};


<WindowSizeReporter />
```
