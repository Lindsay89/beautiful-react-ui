import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tab from './Tab';

describe('Tab component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(
      <Tab>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const mainDiv = container.querySelector('.bi.bi-tab');
    should.exist(container);
    expect(mainDiv).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <Tab>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const firstDiv = container.querySelector('div');
    expect(firstDiv.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-tab']);
  });

  it('should accept an id prop', () => {
    const { container } = render(
      <Tab id="firstTab">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const firstDiv = container.querySelector('.bi.bi-tab');
    expect(firstDiv.id).to.equal('firstTab');
  });

  it('should allow to add custom classes', () => {
    const { container } = render(
      <Tab className="newClass">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const checkClass = container.querySelector('.bi.bi-tab');
    expect(checkClass.getAttribute('class').split(' ')).to.include.members(['newClass']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(
      <Tab style={{ margin: '10px' }}>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab');
    expect(tab.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to change the link color', () => {
    const { container, rerender } = render(
      <Tab color="secondary">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const checkColor = container.querySelector('.bi.bi-tab');
    expect(checkColor.getAttribute('class').split(' ')).to.include.members(['tab-color-secondary']);
    expect(checkColor.getAttribute('class').split(' ')).to.not.include.members(['tab-color-default']);

    rerender(
      <Tab color="danger">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );
    expect(checkColor.getAttribute('class').split(' ')).to.include.members(['tab-color-danger']);
    expect(checkColor.getAttribute('class').split(' ')).to.not.include.members(['tab-color-secondary']);

    rerender(
      <Tab>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );
    expect(checkColor.getAttribute('class').split(' ')).to.include.members(['tab-color-default']);
    expect(checkColor.getAttribute('class').split(' ')).to.not.include.members(['tab-color-danger']);
  });

  it('should render the correct number of tab label', () => {
    const { container } = render(
      <Tab>
        <Tab.Content title="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="contacy">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="profile">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const labelNr = container.querySelector('.bi.bi-tab').querySelectorAll('a').length;
    expect(labelNr).to.equal(3);
  });

  it('should render the correct number of tab content', () => {
    const { container } = render(
      <Tab>
        <Tab.Content title="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="contacy">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="profile">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );
    const contentNr = container.querySelector('.bi.bi-tab').querySelectorAll('.tab-content').length;
    expect(contentNr).to.equal(3);
  });

  it('should accept icon prop', () => {
    const { container } = render(
      <Tab>
        <Tab.Content icon="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const checkIcon = container.querySelector('.bi.bi-tab').querySelector('svg');
    expect(checkIcon.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-icon']);
  });

  it('should disable a label if the corresponding prop is set as disabled', () => {
    const { container } = render(
      <Tab>
        <Tab.Content disabled>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const checkDisabled = container.querySelector('.bi.bi-tab').querySelector('.tab-disabled');
    expect(checkDisabled).to.exist;
  });

  it('should show the active content', () => {
    const { container } = render(
      <Tab active={2}>
        <Tab.Content title="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="contacy">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="profile">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const checkActive = container.querySelector('.bi.bi-tab').querySelector('.tab-content-show');
    expect(checkActive).to.exist;
  });
});
