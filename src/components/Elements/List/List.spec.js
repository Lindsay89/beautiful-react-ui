import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<List />);

    should.exist(container);
    expect(container.querySelector('ul')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<List />);
    const avatar = container.querySelector('ul');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-list', 'bi-list-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<List id="foo" />);
    const avatar = container.querySelector('.bi.bi-list');

    expect(avatar.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<List className="foo" />);
    const avatar = container.querySelector('.bi.bi-list');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<List style={{ margin: '10px' }} />);
    const avatar = container.querySelector('.bi.bi-list');

    expect(avatar.getAttribute('style')).to.equal('margin: 10px;');
  });
});
