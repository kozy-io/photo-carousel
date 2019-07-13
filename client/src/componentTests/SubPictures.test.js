import React from 'react';
import { shallow } from 'enzyme';
import SubPictures from '../components/SubPictures';

describe('SubPictures', () => {
  it('should render correctly', () => {
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.setState({
      opacityThree: 1, opacityTwo: 1, threshold: 1008, totalHeight: 766, totalWidth: 1440,
    });

    expect(component).toMatchSnapshot();
  });

  it('should load sub pictures progressively on mount', () => {
    const spy = jest.spyOn(SubPictures.prototype, 'progressiveLoading');
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.instance().progressiveLoading();
    expect(spy).toHaveBeenCalled();
  });

  it('should handle hover correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.setState({
      hoverTwo: false,
      hoverThree: false,
    });

    component.instance().hoverHandler({ target: { name: 'two' } });
    expect(component.state('hoverTwo')).toEqual(true);
    component.instance().hoverHandler({ target: { name: 'three' } });
    expect(component.state('hoverThree')).toEqual(true);
  });

  it('should handle hovering off correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.setState({
      hoverTwo: true,
      hoverThree: true,
    });

    component.instance().checkHover({ target: { name: 'two' } });
    expect(component.state('hoverTwo')).toEqual(false);
    component.instance().checkHover({ target: { name: 'three' } });
    expect(component.state('hoverThree')).toEqual(false);
  });

  it('should handle clicking on the second or third picture correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} onClickHandler={mockCallBack} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);
    component.setProps({ clickHandler: mockCallBack });

    component.instance().onClickHandler({ target: { name: 'two' } });
    component.instance().onClickHandler({ target: { name: 'three' } });
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });


  it('should handle window resize', () => {
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    const spy = jest.spyOn(component.instance(), 'updateDimensions');

    global.addEventListener('resize', spy);
    global.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
  });
});
