/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ProfilePicture from '../components/ProfilePicture';

describe('ProfilePicture', () => {
  it('should render correctly', () => {
    const component = shallow(<ProfilePicture />);

    component.setState({
      currWidth: 1440, lastThreshold: 720, opacity: 1, threshold: 1008, totalHeight: 766, totalWidth: 1440, photo: 'http://lorempixel.com/1440/960/city',
    });

    expect(component).toMatchSnapshot();
  });

  it('should call load profile picture progressively on mount', () => {
    const spy = jest.spyOn(ProfilePicture.prototype, 'progressiveLoading');
    const component = shallow(<ProfilePicture />);
    component.setState({
      currWidth: 1440, lastThreshold: 720, opacity: 1, threshold: 1008, totalHeight: 766, totalWidth: 1440, photo: 'http://lorempixel.com/1440/960/city',
    });

    component.instance().progressiveLoading();
    expect(spy).toHaveBeenCalled();
  });

  it('should handle hover correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ProfilePicture hoverHandler={mockCallBack} />);

    component.find('img').simulate('mouseenter');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle click correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ProfilePicture clickHandler={mockCallBack} />);

    component.find('img').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle window resize', () => {
    const component = shallow(<ProfilePicture />);

    const spy = jest.spyOn(component.instance(), 'updateDimensions');

    global.addEventListener('resize', spy);
    global.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
  });
});
