// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import noop from 'lodash/noop';
// import Modal from '.';
// import Button from '../Button/Button';

// describe('Modal component', () => {
//   afterEach(() => {
//     sinon.restore();
//     cleanup();
//   });

//   it('should render without explode', () => {
//     const { container } = render(
//       <Modal isOpen onToggle={noop}>
//         <Modal.Title>Amazing modal title</Modal.Title>
//         <Modal.Body>
//           Zombie ipsum brains reversus ab cerebellum viral...
//         </Modal.Body>
//         <Modal.Footer>
//           <Button>Adios!</Button>
//         </Modal.Footer>
//       </Modal>,
//     );

//     const modal = document.getElementById('bi-modals').querySelector('.bi-show-modal');

//     should.exist(container);
//     expect(modal).to.exist;
//   });

// it('should accept an "id" prop', () => {
//   const { container } = render(
//     <Modal isOpen onToggle={noop} id="modalTest">
//       <Modal.Title>Amazing modal title</Modal.Title>
//       <Modal.Body>
//         Zombie ipsum brains reversus ab cerebellum viral...
//       </Modal.Body>
//       <Modal.Footer />
//     </Modal>,
//   );

//   const modal = container.querySelector('.bi.bi-modal');
//   expect(modal.id).to.equal('modalTest');
// });

// it('should accept default classes', () => {
//   const { container } = render(
//     <Modal isOpen onToggle={noop} id="modalTest">
//       <Modal.Title>Amazing modal title</Modal.Title>
//       <Modal.Body>
//         Zombie ipsum brains reversus ab cerebellum viral...
//       </Modal.Body>
//       <Modal.Footer />
//     </Modal>,
//   );

//   const modal = container.querySelectorAll('div');
//   expect(modal.getAttribute('class').split(' ')).to.equal('.bi-show-modal');
// });

// it('should allow to define custom style', () => {
//   const { container } = render(
//     <Modal isOpen onToggle={noop} style={{ margin: '10px' }}>
//       <Modal.Title>Amazing modal title</Modal.Title>
//       <Modal.Body>
//         Zombie ipsum brains reversus ab cerebellum viral...
//       </Modal.Body>
//       <Modal.Footer />
//     </Modal>,
//   );

//   const modal = container.querySelectorAll('.bi-show-modal');
//   expect(modal.getAttribute('style')).to.equal('margin: 10px;');
// });

// it('should accept centered prop', () => {
//   const { container } = render(
//     <Modal isOpen onToggle={noop} centered>
//       <Modal.Title>Amazing modal title</Modal.Title>
//       <Modal.Body>
//         Zombie ipsum brains reversus ab cerebellum viral...
//       </Modal.Body>
//       <Modal.Footer />
//     </Modal>,
//   );

//   const modal = container.querySelectorAll('.bi-show-modal');
//   expect(modal.getAttribute('class').split(' ')).to.equal('modal-centered');
// });
// });
