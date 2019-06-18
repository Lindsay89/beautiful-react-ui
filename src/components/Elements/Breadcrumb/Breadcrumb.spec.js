import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Breadcrumb from '.';


describe('Breadcrumb component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumb items={pages} />);

    should.exist(container);
    expect(container.querySelector('nav')).to.exist;
  });

  it('should have default classes', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumb items={pages} />);
    const nav = container.querySelector('nav');

    expect(nav.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-breadcrumb']);
  });

  it('should accept an "id" prop', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumb id="foo" items={pages} />);
    const breadcrumb = container.querySelector('nav');

    expect(breadcrumb.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumb className="foo" items={pages} />);
    const breadcrumb = container.querySelector('nav');

    expect(breadcrumb.getAttribute('class').split(' ')).to.include.members(['foo']);
  });


  it('should allow to define custom style', () => {
    const pages = [{ path: '/', label: 'Home' }];
    const { container } = render(<Breadcrumb items={pages} style={{ margin: '10px' }} />);
    const nav = container.querySelector('nav');

    expect(nav.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render a number of <li> tags equal to the number of given items', () => {
    const pages = [{ path: 'home', label: 'Home' }, { path: '/section', label: 'Section' }];
    const { container } = render(<Breadcrumb items={pages} />);
    const renderedLi = container.querySelectorAll('li');
    const liLen = renderedLi.length;

    expect(pages.length).to.equal(liLen);
  });

  it('should render a number of <a> tags equal to the number of given paths', () => {
    const pages = [{ path: '/', label: 'home' }, { path: '/section', label: 'Section' }];
    let nrPath = 0;
    pages.forEach((item) => {
      if (item.path) {
        nrPath += 1;
      }
    });
    const { container } = render(<Breadcrumb items={pages} />);
    const renderedA = container.querySelectorAll('a');
    const aLen = renderedA.length;

    expect(nrPath).to.equal(aLen);
  });

  it('should allow to define the breadcrumb links color', () => {
    const pages = [{ path: '/', label: 'home' }, { path: '/section', label: 'Section' }];
    const { container, rerender } = render(<Breadcrumb items={pages} color="secondary" />);
    const firstColor = container.querySelector('nav');

    expect(firstColor.getAttribute('class').split(' ')).to.include.members(['breadcrumb-secondary']);
    expect(firstColor.getAttribute('class').split(' ')).to.not.include.members(['breadcrumb-primary']);

    rerender(<Breadcrumb items={pages} color="danger" />);
    const secondColor = container.querySelector('nav');
    expect(secondColor.getAttribute('class').split(' ')).to.include.members(['breadcrumb-danger']);
    expect(secondColor.getAttribute('class').split(' ')).to.not.include.members(['breadcrumb-secondary']);

    rerender(<Breadcrumb items={pages} />);
    const noColor = container.querySelector('nav').getAttribute('class').split(' ');
    expect(noColor).to.include.members(['breadcrumb-primary']);
    expect(noColor).to.not.include.members(['breadcrumb-danger', 'breadcrumb-secondary']);
  });

  it('it should possibly run a renderer passing current item as parameter', () => {
    const spy = sinon.spy();
    const pages = [{ path: '/', label: 'home' }, { path: '/section', label: 'Section', render: spy }];
    render(<Breadcrumb items={pages} />);
    const spyArgs = spy.args[0];

    expect(spy.calledOnce).to.be.equal(true);
    expect(spyArgs[0]).to.be.equal(pages[1]);
  });


  it('should warn if both label or icon are missing in items array', () => {
    const spy = sinon.spy(console, 'warn');
    const pages = [{ path: '/', label: 'home' }, { path: '/section' }];
    render(<Breadcrumb items={pages} />);

    expect(spy.calledOnce).to.be.equal(true);
  });
});
