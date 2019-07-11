import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from 'lodash/noop';
import Modal from '.';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

describe('Modal component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render component outside is container', () => {
    const { container } = render(
      <Modal>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer>
          <Button>Adios!</Button>
        </Modal.Footer>
      </Modal>,
    );

    const modalContainer = container.querySelector('#bi-modals');

    expect(modalContainer).to.equal(null);

    const modalBody = document.querySelector('#bi-modals');

    expect(modalBody).to.exist;
  });

  it('should render without explode', () => {
    render(
      <Modal isOpen>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer>
          <Button>Adios!</Button>
        </Modal.Footer>
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi.bi-modal').querySelectorAll('div').length;

    expect(modal).to.equal(2);
  });

  it('should accept an "id" prop', () => {
    render(
      <Modal isOpen id="modalTest">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi.bi-modal');
    expect(modal.id).to.equal('modalTest');
  });

  it('should accept default classes', () => {
    render(
      <Modal isOpen onToggle={noop} id="modalTest">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi-modal-wrapper > div + div');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-modal']);
  });

  it('should allow to define custom style', () => {
    render(
      <Modal isOpen onToggle={noop} style={{ margin: '10px' }}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi-modal-wrapper').querySelectorAll('div')[1];
    expect(modal.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should create a backdrop', () => {
    render(
      <Modal isOpen onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi-modal-wrapper').querySelectorAll('div')[0];
    expect(modal.getAttribute('class')).to.equal('modal-backdrop');
  });

  it('should not create modal div if isOpen prop is false', () => {
    render(
      <Modal onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );
    const modal = document.getElementById('bi-modals').querySelector('.bi-modal-wrapper');
    expect(modal).to.not.exist;
  });

  it('should accept centered prop', () => {
    render(
      <Modal isOpen onToggle={noop} centered>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-centered']);
  });

  it('should accept size prop', () => {
    const { rerender } = render(
      <Modal isOpen onToggle={noop} size="small">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-small']);

    rerender(
      <Modal isOpen onToggle={noop} size="large">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-large']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-small']);

    rerender(
      <Modal isOpen onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-large']);
  });


  it('should accept animation prop', () => {
    const { rerender } = render(
      <Modal isOpen onToggle={noop} animation="scale">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.getElementById('bi-modals').querySelector('.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-scale']);

    rerender(
      <Modal isOpen onToggle={noop} animation="slideTop">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-slideTop']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-scale']);

    rerender(
      <Modal isOpen onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );
    expect(modal.getAttribute('class').split(' ')).to.include.members(['modal-fade']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['modal-slideTop']);
  });

  it('should accept onToggle prop', () => {
    const onToggleSpy = sinon.spy();
    render(
      <Modal isOpen onToggle={onToggleSpy}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modalCloseButton = document.querySelector('.modal-button');
    fireEvent.click(modalCloseButton);

    expect(onToggleSpy.calledOnce).to.be.equal(true);
  });

  it('should render a custom backdrop if provided', () => {
    const backDrop = () => (
      <div
        className="backdrop"
        style={{ background: 'blue', top: '0', width: '100%', height: '100%', position: 'fixed' }}
      >
        Some text here
      </div>
    );
    render(
      <Modal isOpen backdropRender={backDrop}>
        <Modal.Title onToggle={noop}>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modalOriginalBackDrop = document.getElementById('bi-modals').querySelector('.modal-backdrop');
    expect(modalOriginalBackDrop).to.not.exist;

    const modalNewBackdrop = document.getElementById('bi-modals').querySelector('.backdrop');
    expect(modalNewBackdrop).to.exist;
  });

  it('should render a custom close button if provided', () => {
    const closeButton = () => (
      <Button color="danger" className="some-button">
        <Icon name="home" />
      </Button>
    );

    render(
      <Modal isOpen closeButtonRender={closeButton}>
        <Modal.Title onToggle={noop}>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modalOriginalButton = document.getElementById('bi-modals').querySelector('.modal-close-button');
    expect(modalOriginalButton).to.not.exist;

    const modalNewButton = document.getElementById('bi-modals').querySelector('.some-button');
    expect(modalNewButton).to.exist;
  });

  it('should perform onClose callback when closing modal, if provided', () => {
    const onCloseSpy = sinon.spy();

    render(
      <Modal isOpen onClose={onCloseSpy} onToggle={noop}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modalCloseButton = document.querySelector('.modal-button');
    fireEvent.click(modalCloseButton);

    expect(onCloseSpy.calledOnce).to.be.equal(true);
  });

  it('should perform onShow callback when showing modal, if provided', () => {
    const onShowSpy = sinon.spy();

    render(
      <Modal isOpen onShow={onShowSpy}>
        <Modal.Title onToggle={noop}>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    expect(onShowSpy.calledOnce).to.be.equal(true);
  });
});
