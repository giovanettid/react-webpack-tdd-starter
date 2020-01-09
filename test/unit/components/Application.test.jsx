import React from 'react';
import Application from 'components/Application';
import Configuration from 'components/Configuration';

describe('Application', () => {
  it('should display js starter template', () => {
    const wrapper = shallow(<Application configuration={() => ({ ...new Configuration() })} />);

    expect(wrapper.find('.starter').text()).to.equal('js starter...');
  });
});
