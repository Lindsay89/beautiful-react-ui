### Basic Usage


```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value}>
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <ModalController />

```


### Closable button working
The prop `onToggle` accept a function that will be run on click the closable button.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value} onToggle={()=>{setValue(!value)}}>
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <ModalController />

```


### Centered
`Centered` will center the modal in the middle of viewport.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value} onToggle={()=>{setValue(!value)}} centered>
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <ModalController />

```

### Size
`size` props could be used to decide the modal size.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
  <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}>
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>

<Button block color="primary" className="align-button" onClick={()=>{setValue(!value)}}>{props.size}</Button>
</>
)};

<>
  <ModalController size='small' />
  <ModalController size='large' />
  <ModalController size='default' />
</>
```


### Animation
`animation` will be perform to show the modal in different ways.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}>
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
  
    <Button block color="primary" className="align-button" onClick={()=>{setValue(!value)}}>{props.animation}</Button>
  
</>
)};

<>
  <ModalController animation='none' />
  <ModalController animation='fade' />
  <ModalController animation='scale' />
  <ModalController animation='slideTop' />
  <ModalController animation='slideBottom' />
  <ModalController animation='slideRight' />
  <ModalController animation='slideLeft' />
</>
```


### Callbacks
`onBackdropClick` prop accept a function that will be execute when clickin on backdrop.

```jsx
import {Button} from 'beautiful-ui';

const clickCoordinates =  (e)=> {
  var xPosition = e.clientX;
  var yPosition = e.clientY;
  alert('you click here: ['+xPosition+','+yPosition+']. Please click ok to close the alert.')
};

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}> 
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>onBackdropClick test</Button>
</>
)};

<ModalController onBackdropClick={clickCoordinates} />
```


`onShow` props accept a function that will be run when the modal is active.
```jsx
import {Button} from 'beautiful-ui';

const show = () => alert('this will be an amazing modal');

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}> 
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>onShow test</Button>
</>
)};

<ModalController onShow={show} />  
```


`onClose` props accept a function that will be run when the modal is closed.
```jsx
import {Button} from 'beautiful-ui';

const close = () => alert('NOOOO!! DO NOT CLOSE ME!!');

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}> 
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>onClose test</Button>
</>
)};

  <ModalController onClose={close} />
```

### Renderers

`backdropRender` props accept a function that will change the normal behaviour of the component.

```jsx
import {Button} from 'beautiful-ui';

const backDrop = () => alert('you define just an alert, do you expect something more??');

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}> 
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>backdropRender test</Button>
</>
)};

  <ModalController backdropRender={backDrop} />
```


`closeButtonRender` props accept a function that will change the normal behaviour of the close modal button.

```jsx
import {Button} from 'beautiful-ui';

const closeButton = () => alert("AH! I WONT CLOSE ANYMORE!!");

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value}> 
    <Modal.Title>Amazing modal title</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>closeButtonRender test</Button>
</>
)};

  <ModalController closeButtonRender={closeButton} />

```


