import checkAvailableSpace from './checkAvailableSpace';

describe('checkAvailableSpace function', () => {
  it('should be a function', () => {
    expect(checkAvailableSpace).to.be.a('function');
  });

  it('should return true if the provided style is valid', () => {
    const targetRef = document.createElement('div');
    const isValid = checkAvailableSpace(targetRef, { bottom: 100 }, 'bottom-center');

    expect(isValid).to.be.true;
  });
});
