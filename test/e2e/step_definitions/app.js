import { defineSupportCode } from 'cucumber';

defineSupportCode(({ When }) => {
  When('Hello', () => {
    browser.url('/');
  });
});
