import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Card from './Card';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardImage from './CardImage';

describe('Card component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explore', () => {
    const { container } = render(
      <Card>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );

    expect(container).to.exist;
    expect(container.querySelector('.bi.bi-card')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <Card>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('div');

    expect(cardComp.classList.contains('bi')).to.be.true;
    expect(cardComp.classList.contains('bi-card')).to.be.true;
  });

  it('should accept an id prop', () => {
    const { container } = render(
      <Card id="foo">
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(
      <Card className="foo">
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('foo')).to.be.true;
  });

  it('should accept custom style', () => {
    const { container } = render(
      <Card style={{ margin: '10px' }}>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should accept a \'fluid\' prop', () => {
    const { container } = render(
      <Card fluid>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('fluid')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(
      <Card textAlign="center">
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('text-align-center')).to.be.true;
  });

  it('should accept an \'horizontal\' prop', () => {
    const { container } = render(
      <Card horizontal>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('horizontal')).to.be.true;
  });

  it('should accept a \'reversed\' prop', () => {
    const { container } = render(
      <Card reversed>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.classList.contains('reversed')).to.be.true;
  });

  it('shold accept an \'actionButton\' prop', () => {
    const { container } = render(
      <Card actionButton>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card');

    expect(cardComp.querySelector('.card-action-button-icon')).to.exist;
    expect(cardComp.querySelector('.bi.bi-btn')).to.exist;
  });

  it('should accept an \'actionButtonIcon\' prop', () => {
    const { container, rerender } = render(
      <Card actionButton actionButtonIcon="heart">
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card .card-action-button-icon .bi.bi-btn').querySelector('svg');

    expect(cardComp.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-icon']);
    expect(cardComp.getAttribute('data-icon')).to.equal('heart');

    rerender(
      <Card actionButton>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    expect(cardComp.getAttribute('data-icon')).to.equal('ellipsis-v');
  });

  it('should accept an \'onActionButtonClick\' prop', () => {
    const onClick = sinon.spy();
    const { container } = render(
      <Card actionButton onActionButtonClick={onClick}>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card .card-action-button-icon .bi.bi-btn');

    fireEvent.click(cardComp);

    expect(onClick.calledOnce).to.be.true;
  });

  it('should accept an \'actionButtonRender\' prop', () => {
    const buttonRender = sinon.spy();

    render(
      <Card actionButton actionButtonRender={buttonRender}>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );

    expect(buttonRender.calledOnce).to.be.equal(true);
  });

  it('should set the img maxWidth when the card has a defined action button and it is reversed horizontally', () => {
    const { container } = render(
      <Card reversed horizontal actionButton>
        <CardTitle>Foo</CardTitle>
        <CardContent>Foo</CardContent>
        <CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />
        <CardFooter>foo</CardFooter>
      </Card>,
    );
    const cardComp = container.querySelector('.bi.bi-card.horizontal.reversed');

    expect(cardComp).to.exist;
    expect(cardComp.querySelector('.icon-img-container')).to.exist;
    expect(cardComp.querySelector('.icon-img-container .card-action-button-icon')).to.exist;
  });
});

describe('CardTitle component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup;
  });

  it('should render without explode', () => {
    const { container } = render(<CardTitle> Foo </CardTitle>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-title.card-title')).to.exist;
  });

  it('should accept default classes', () => {
    const { container } = render(<CardTitle> Foo </CardTitle>);
    const titleCardComp = container.querySelector('h1');

    expect(titleCardComp.classList.contains('bi-title')).to.be.true;
    expect(titleCardComp.classList.contains('card-title')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(<CardTitle textAlign="center">foo</CardTitle>);
    const titleCardComp = container.querySelector('.bi-title.card-title');

    expect(titleCardComp.classList.contains('text-align-center')).to.be.true;
  });

  it('should allow to change the title\'s color accepting a \'color\' prop', () => {
    const { container, rerender } = render(<CardTitle color="secondary">foo</CardTitle>);
    const titleCardComp = container.querySelector('.bi-title.card-title');

    expect(titleCardComp.classList.contains('bi-title-secondary')).to.be.true;

    rerender(<CardTitle>foo</CardTitle>);

    expect(titleCardComp.classList.contains('bi-title-secondary')).to.be.false;
  });
});

describe('CardContent component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup;
  });

  it('should render without explode', () => {
    const { container } = render(<CardContent>Foo</CardContent>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-p.card-content')).to.exist;
  });

  it('should accept default classes', () => {
    const { container } = render(<CardContent> Foo </CardContent>);
    const contentCardComp = container.querySelector('p');

    expect(contentCardComp.classList.contains('bi-p')).to.be.true;
    expect(contentCardComp.classList.contains('card-content')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(<CardContent textAlign="center">foo</CardContent>);
    const contentCardComp = container.querySelector('.bi-p.card-content');

    expect(contentCardComp.classList.contains('text-align-center')).to.be.true;
  });
});

describe('CardFooter component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup;
  });

  it('should render without explode', () => {
    const { container } = render(<CardFooter>Foo</CardFooter>);

    expect(container).to.exist;
    expect(container.querySelector('.card-footer')).to.exist;
  });

  it('should accept default classes', () => {
    const { container } = render(<CardFooter> Foo </CardFooter>);
    const footerCardComp = container.querySelector('footer');

    expect(footerCardComp.classList.contains('card-footer')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(<CardFooter textAlign="center">foo</CardFooter>);
    const footerCardComp = container.querySelector('.card-footer');

    expect(footerCardComp.classList.contains('text-align-center')).to.be.true;
  });
});

describe('CardImage component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup;
  });

  it('should render without explode', () => {
    const { container } = render(<CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />);

    expect(container).to.exist;
    expect(container.querySelector('.card-img')).to.exist;
  });

  it('should accept default classes', () => {
    const { container } = render(<CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />);
    const footerCardComp = container.querySelector('div');

    expect(footerCardComp.classList.contains('card-img')).to.be.true;
  });
});
