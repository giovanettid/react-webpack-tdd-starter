import { defineSupportCode } from 'cucumber';

defineSupportCode(({ When, Then }) => {
  When(/^Go js starter$/, () => {
    browser.url('/');
  });

  Then(/^Says "(.*)"$/, (starter) => {
    expect(browser.getText('.starter')).to.equal(starter);
  });
});
