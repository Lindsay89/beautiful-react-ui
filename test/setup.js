const chai = require('chai');

// shortcuts:
global.expect = chai.expect;
global.should = chai.should();

// because of a bug in one of the project dependency `wait-for-expect`, the following line must be placed here.
// to know more: https://github.com/testing-library/dom-testing-library/issues/194
window.Date = Date;
