### Basic Usage


```jsx
import {Button} from 'beautiful-ui';
const OpenModel = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value}>
    <Modal.Title>Ciao povery</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <OpenModel />

```


### Closable button working


```jsx
import {Button} from 'beautiful-ui';
const OpenModel = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value} onToggle={()=>{setValue(!value)}}>
    <Modal.Title>Ciao povery</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <OpenModel />

```


### Centered


```jsx
import {Button} from 'beautiful-ui';
const OpenModel = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value} onToggle={()=>{setValue(!value)}} centered>
    <Modal.Title>Ciao povery</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <OpenModel />

```

### Size


```jsx
import {Button} from 'beautiful-ui';
const OpenModel = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
  <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}>
    <Modal.Title>Ciao povery</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>

<Button block color="primary" className="align-button" onClick={()=>{setValue(!value)}}>{props.size}</Button>
</>
)};

<>

  <OpenModel size='small' />
  <OpenModel size='large' />
  <OpenModel size='default' />
</>
```


### Animation


```jsx
import {Button} from 'beautiful-ui';
const OpenModel = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value} onToggle={()=>{setValue(!value)}}>
    <Modal.Title>Ciao povery</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
  
    <Button block color="primary" className="align-button" onClick={()=>{setValue(!value)}}>{props.animation}</Button>
  
</>
)};

<>
  <OpenModel animation='none' />
  <OpenModel animation='fade' />
  <OpenModel animation='scale' />
  <OpenModel animation='slideTop' />
  <OpenModel animation='slideBottom' />
  <OpenModel animation='slideRight' />
  <OpenModel animation='slideLeft' />
</>
```


### Callbacks


```jsx
import {Button} from 'beautiful-ui';

const alert = () => console.log('you are clicking somewhere');
const show = () => console.log('show');
const close = () => console.log('close');

const OpenModel = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value} onToggle={()=>{setValue(!value)}} onBackdropClick={alert} onShow={show} onClose={close}> 
    <Modal.Title>Ciao povery</Modal.Title>
    <Modal.Body>Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.</Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <OpenModel />

```
