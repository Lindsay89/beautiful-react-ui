### Basic Usage
A Modal component shows its children contents positioned over everything else in the document.
The modal will close clicking on backdrop.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
      <Modal isOpen={value} onBackdropClick={()=>{setValue(!value)}}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. 
        </Modal.Body>
      </Modal>
      <Button block color="primary" onClick={()=>{setValue(!value)}}>View live demo</Button>
    </>
)};



  <ModalController />

```


### Title
It is possible giving a title to modal. 

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
      <Modal isOpen={value} onBackdropClick={()=>{setValue(!value)}}>
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

The title could have a closable button.
```jsx
import {Button} from 'beautiful-ui';
import CloseIcon from '../_CloseIcon';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
      <Modal isOpen={value}>
        <Modal.Title>
          Amazing modal title
          <Button 
            color="transparent" 
            style={{position:'absolute', top:0, right:0, padding:'1rem'}} 
            onClick={()=>{setValue(!value)}}>
            <CloseIcon />
          </Button>
        </Modal.Title>
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
      <Modal isOpen={value} centered onBackdropClick={()=>{setValue(!value)}}>
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
`size` props could be used to change the modal size.

```jsx
import {Button} from 'beautiful-ui';
const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
  <>
    <Modal {...props} isOpen={value} onBackdropClick={()=>{setValue(!value)}}>
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
      <Modal {...props} isOpen={value} onBackdropClick={()=>{setValue(!value)}}>
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
`onShow` props accept a function that will be run when the modal is opening.
```jsx
import {Button} from 'beautiful-ui';

const show = () => alert('this will be an amazing modal');

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
      <Modal {...props} isOpen={value} onBackdropClick={()=>{setValue(!value)}}>
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


`onClose` props accept a function that will be run when the modal is closing.
```jsx
import {Button} from 'beautiful-ui';

const close = () => alert('Are you sure you want to close the modal?');

const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  
  return(
    <>
      <Modal {...props} isOpen={value} onBackdropClick={()=>{setValue(!value)}}>
        <Modal.Title {...props}>Amazing modal title</Modal.Title>
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

`backdropRender` props accept a function that will change the normal behaviour of the backdrop component.

```jsx
import {Button} from 'beautiful-ui';


const ModalController = (props) => {
  const [value, setValue] = React.useState(false);
  const backDrop = (props) => (
  <div style={{background:'blue', top:'0', width:'100%', height:'100%', position:'fixed'}}>
    <Button color="danger" onClick={()=>{setValue(false)}}>
      Click here to close the modal
    </Button>
  </div>);

  return(
    <>
      <Modal {...props} isOpen={value}  backdropRender={backDrop} >
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De  carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.
        </Modal.Body>
        <Modal.Footer>
          <Button>Adios!</Button>
        </Modal.Footer>
      </Modal>
      <Button block color="primary" onClick={()=>{setValue(!value)}}>backdropRender test</Button>
  </>
)};

  <ModalController/>
```