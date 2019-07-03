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
  <Modal isOpen={value} onClose={()=>{setValue(!value)}}>
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
  <Modal isOpen={value} onClose={()=>{setValue(!value)}} centered>
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