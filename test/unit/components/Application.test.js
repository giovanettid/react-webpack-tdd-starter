import Application from 'components/Application';
import png from 'images/hello.png';

describe('Application', () => {
  beforeAll(() => {
    const element = document.createElement('div');
    element.classList.add('Application');
    document.body.appendChild(element);
  });

  it('should display js starter template', () => {
    const applicationSelector = 'div.Application';

    Application.start();

    expect(document.querySelector(applicationSelector).textContent)
      .to.equal('js starter...');
    expect(document.querySelector(`${applicationSelector} img`).src)
      .to.equal(png);
  });
});
