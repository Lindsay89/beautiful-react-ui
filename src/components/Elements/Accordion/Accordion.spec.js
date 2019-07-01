import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from 'lodash/noop';
import Accordion from '.';

describe('Accordion component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const contentsTags = container.querySelectorAll('.bi.bi-acc-content').length;

    expect(contentsTags).to.equal(2);
  });

  it('should have default classes', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );
    const accordionClass = container.querySelector('div');

    expect(accordionClass.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-accordion']);

    const childrenAcc = accordionClass.querySelector('div > div');

    expect(childrenAcc.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-acc-content']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1} id="newAcc">
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const accordion = container.querySelector('.bi.bi-accordion');

    expect(accordion.id).to.equal('newAcc');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1} className="custom-acc-class">
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const accordion = container.querySelector('.bi.bi-accordion');

    expect(accordion.getAttribute('class').split(' ')).to.include.members(['custom-acc-class']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1} style={{ margin: '30px' }}>
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );
    const accordion = container.querySelector('.bi.bi-accordion');

    expect(accordion.getAttribute('style')).to.equal('margin: 30px;');
  });

  it('should allow to change accordion link color', () => {
    const { container, rerender } = render(
      <Accordion onChange={noop} active={1} color="info">
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const accordion = container.querySelector('.bi.bi-accordion');

    expect(accordion.getAttribute('class').split(' ')).to.include.members(['acc-color-info']);
    expect(accordion.getAttribute('class').split(' ')).to.not.include.members(['acc-color-default']);

    rerender(
      <Accordion onChange={noop} active={1} color="primary">
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    expect(accordion.getAttribute('class').split(' ')).to.include.members(['acc-color-primary']);
    expect(accordion.getAttribute('class').split(' ')).to.not.include.members(['acc-color-info']);

    rerender(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    expect(accordion.getAttribute('class').split(' ')).to.include.members(['acc-color-default']);
    expect(accordion.getAttribute('class').split(' ')).to.not.include.members(['acc-color-primary']);
  });

  it('should possibly allow to override standard icons', () => {
    const { container, rerender } = render(
      <Accordion onChange={noop} active={1} iconOpen="heart">
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const accordion = container.querySelector('.bi.bi-accordion').querySelector('svg');
    expect(accordion.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-icon']);

    rerender(
      <Accordion onChange={noop} active={1} iconClose="plus">
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    expect(accordion.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-icon']);
  });

  it('should show only one element per time', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const activeElement = container.querySelector('.bi.bi-acc-content.acc-content-show');

    expect(activeElement).to.exist;
  });

  it('should if provided perform the onChange function when clicking on the title button', () => {
    const onChangeSpy = sinon.spy();
    const { container } = render(
      <Accordion onChange={onChangeSpy} active={1}>
        <Accordion.Content title="fancy title">
          <div>
            <p>some text here</p>
          </div>
        </Accordion.Content>
        <Accordion.Content title="a new title">
          <div>
            <p>a new text here</p>
          </div>
        </Accordion.Content>
      </Accordion>,
    );

    const accordionButton = container.querySelector('.bi.bi-btn.acc-title-button');

    fireEvent.click(accordionButton);

    expect(onChangeSpy.calledOnce).to.be.equal(true);
  });
});
