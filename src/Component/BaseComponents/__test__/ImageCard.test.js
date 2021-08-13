import React from 'react';
import {shallow} from 'enzyme';
import ImageCard from '../ImageCard';

describe('test ImageCard component', () => {
  it('should render given content correctly', () => {
    const wrapper = shallow(<ImageCard
      image="http://image.url"
      content={<div id="content" />}
      subContent={<div id="sub-content" />}
      actionButton={<button id="action-button"/>}
      fullWidth />);
    expect(wrapper.find('.card-main-content').find('#content')).toHaveLength(1);
    expect(wrapper.find('.card-sub-content').find('#sub-content')).toHaveLength(1);
    expect(wrapper.find('.card-sub-content').find('#action-button')).toHaveLength(1);

    expect(wrapper.find('img').props().src).toEqual('http://image.url')
  });

  it('should render default image if the poster is not found', () => {
    const wrapper = shallow(<ImageCard
      image="http://image.url"
      content={<div id="content" />}
      subContent={<div id="sub-content" />}
      actionButton={<button id="action-button"/>}
      fullWidth />);
    wrapper.find('img').simulate('error');

    expect(wrapper.find('img').props().src).not.toEqual('http://image.url')
    expect(wrapper.find('img').props().src).toEqual('./movie-poster-placeholder.png')
  });
});
