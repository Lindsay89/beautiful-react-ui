### Basic Usage


```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
      <Modal isOpen={value}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
        </Modal.Body>
        <Modal.Footer>
          <Button>Adios!</Button>
        </Modal.Footer>
      </Modal>
      <Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
    </>
)};



  <ModalController />

```


### Closable button
The prop `onToggle` accept a function that will be run when click close button.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value}>
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
    </Modal.Body>
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
  <Modal isOpen={value} centered>
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
    </Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
</>
)};



  <ModalController />

```

### Sizes
`size` props could be used to decide the modal size.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
  <>
  <Modal {...props} isOpen={value}>
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.
    </Modal.Body>
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
  <Modal {...props} isOpen={value}>
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
    </Modal.Body>
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
  <Modal {...props} isOpen={value}> 
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
    </Modal.Body>
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
  <Modal {...props} isOpen={value}> 
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
    </Modal.Body>
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

const close = () => alert('Are you sure you want to close the modal?');

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value}> 
    <Modal.Title {...props} onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De     carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.
    </Modal.Body>
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

const backDrop = (props) => (<div style={{background:'blue', top:'0', width:'100%', height:'100%', position:'fixed'}}> Some text here </div>);

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal {...props} isOpen={value}> 
    <Modal.Title onToggle={()=>{setValue(!value)}}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De     carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.
    </Modal.Body>
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
import {Button, Icon} from 'beautiful-ui';

const closeButton = () => (
  <Button color="danger" className="close-button">
    <Icon name='home' />
  </Button>
);

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
  <Modal isOpen={value}> 
    <Modal.Title {...props}>Amazing modal title</Modal.Title>
    <Modal.Body>
      Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
    </Modal.Body>
    <Modal.Footer>
      <Button>Adios!</Button>
    </Modal.Footer>
  </Modal>
<Button block color="primary" onClick={()=>{setValue(!value)}}>closeButtonRender test</Button>
</>
)};

  <ModalController closeButtonRender={closeButton} />

```


