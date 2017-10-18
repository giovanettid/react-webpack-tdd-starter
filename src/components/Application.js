import png from 'images/hello.png';

export default class {
  static start() {
    document.querySelector('div.Application').innerHTML = '<img>js starter...';
    document.querySelector('img').src = png;
  }
}
