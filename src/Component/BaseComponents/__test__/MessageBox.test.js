import React from 'react';
import { shallow } from 'enzyme';
import MessageBox from '../MessageBox';

describe('test MessageBox component', () => {
  it('should render the given children', () => {
    const wrapper = shallow(<MessageBox type="info">
      <div id="simple-child">Test content</div>
    </MessageBox>);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('#simple-child').exists()).toBeTruthy();
    expect(wrapper.find('#simple-child').text()).toEqual('Test content');
  });

  it('should add the correct class name depending on the type info', () => {
    const wrapper = shallow(<MessageBox type="info">
      <div id="simple-child">Test content</div>
    </MessageBox>);

    expect(wrapper.find('.message-box-info')).toHaveLength(1);
    expect(wrapper.find('.message-box-error')).toHaveLength(0);
  });

  it('should add the correct class name depending on the type error', () => {
    const wrapper = shallow(<MessageBox type="error">
      <div id="simple-child">Test content</div>
    </MessageBox>);

    expect(wrapper.find('.message-box-error')).toHaveLength(1);
    expect(wrapper.find('.message-box-info')).toHaveLength(0);
  });
});
