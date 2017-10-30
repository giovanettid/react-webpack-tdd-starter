import React from 'react';
import Application from 'components/Application';

describe('Application', () => {
  it('should display js starter template', () => {
    const wrapper = shallow(<Application />);

    expect(wrapper.find('.starter').text()).to.equal('js starter...');
  });
});
