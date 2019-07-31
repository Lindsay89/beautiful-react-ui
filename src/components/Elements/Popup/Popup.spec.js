import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from 'lodash/noop';
import Button from '../Button';
import Popup from '.';

describe('Popup component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const Trigger = (<Button>foo</Button>);

  it('should render without explode', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen>
        some text here
      </Popup>,
    );

    expect(document.querySelector('#bi-popups')).to.exist;
  });


  it('should have default classes', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen className="foo">
        some text here
      </Popup>,
    );

    const popup = document.querySelector('#bi-popups > div');
    expect(popup.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-popup', 'popup-top-center']);
  });

  it('should accept "id" prop', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen id="foo">
        some text here
      </Popup>,
    );

    const popup = document.querySelector('#bi-popups .bi.bi-popup');
    expect(popup.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen className="foo">
        some text here
      </Popup>,
    );

    const popup = document.querySelector('#bi-popups .bi.bi-popup');
    expect(popup.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should not render the Popup component if isOpen prop is set to false', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen={false}>
        some text here
      </Popup>,
    );

    expect(document.querySelector('#bi-popups .bi-popup')).not.to.exist;
  });

  it('should allow to define when to fire the "onToggle" callback', () => {
    const onToggleHoverSpy = sinon.spy();

    render(
      <Popup trigger={Trigger} isOpen action="hover" onToggle={onToggleHoverSpy}>
        some text here
      </Popup>,
    );

    const popupTrigger = document.querySelector('.bi-popup-trigger');

    fireEvent.mouseOver(popupTrigger);

    expect(onToggleHoverSpy.calledOnce).to.be.true;
  });

  it('should allow to define a popup title', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen title="some title">
        some text here
      </Popup>,
    );

    const popupTitle = document.querySelector('#bi-popups .bi.bi-popup .popup-title');
    expect(popupTitle).to.exist;
  });

  it('should allow to define the popup placement', () => {
    const { rerender } = render(
      <Popup onToggle={noop} trigger={Trigger} isOpen placement="top-left">
        some text here
      </Popup>,
    );

    const popup = document.querySelector('#bi-popups .bi.bi-popup');

    expect(popup.getAttribute('class').split(' ')).to.not.include.members(['popup-top-center']);
    expect(popup.getAttribute('class').split(' ')).to.include.members(['popup-top-left']);

    rerender(
      <Popup onToggle={noop} trigger={Trigger} isOpen placement="bottom-right">
        some text here
      </Popup>,
    );

    expect(popup.getAttribute('class').split(' ')).to.not.include.members(['popup-top-left']);
    expect(popup.getAttribute('class').split(' ')).to.include.members(['popup-bottom-right']);

    rerender(
      <Popup onToggle={noop} trigger={Trigger} isOpen>
        some text here
      </Popup>,
    );

    expect(popup.getAttribute('class').split(' ')).to.not.include.members(['popup-bottom-right']);
    expect(popup.getAttribute('class').split(' ')).to.include.members(['popup-top-center']);
  });

  it('should allow to hide the little arrow', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen hideArrow>
        some text here
      </Popup>,
    );

    const popup = document.querySelector('#bi-popups .bi.bi-popup');

    expect(popup.getAttribute('class').split(' ')).to.include.members(['popup-hide-arrow']);
  });


  it('should avoid adding custom style', () => {
    render(
      <Popup onToggle={noop} trigger={Trigger} isOpen style={{ margin: '10px' }}>
        some text here
      </Popup>,
    );

    const popup = document.querySelector('#bi-popups .bi.bi-popup');
    expect(popup.getAttribute('style')).not.equal('margin: 10px;');
  });
});
