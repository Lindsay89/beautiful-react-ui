import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Popup from '.';
import Button from '../Button';
import getElementAbsolutePosition from './getElementAbsolutePosition';

describe('getElementAbsolutePosition function', () => {
  afterEach(cleanup);

  const Trigger = (<Button>Foo</Button>);

  it('should calculate default top-center position', () => {
    render(
      <Popup trigger={Trigger} isOpen>
        some text here
      </Popup>,
    );

    const popup = document.querySelector('.bi-popup-trigger');
    const positionAbsolute = getElementAbsolutePosition(popup);
    const { bottom, transform } = positionAbsolute;

    expect(bottom).to.equal(10);
    expect(transform).to.equal('translateX(50%)');
  });

  it('should add an offset to the popup position', () => {
    render(
      <Popup trigger={Trigger} isOpen offset={200}>
        some text here
      </Popup>,
    );

    const popup = document.querySelector('.bi-popup-trigger');
    const positionAbsolute = getElementAbsolutePosition(popup, 'bottom-center', 200);
    const { bottom, transform } = positionAbsolute;

    expect(bottom).to.equal(-200);
    expect(transform).to.equal('translate(50%,100%)');
  });
});
