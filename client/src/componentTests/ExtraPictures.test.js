import React from 'react';
import { shallow } from 'enzyme';
import ExtraPictures from '../components/ExtraPictures';

describe('ExtraPictures', () => {
  it('should render correctly', () => {
    const component = shallow(<ExtraPictures photos={ ['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city'] } tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.setState({
      opacityFour: 1, opacityFive: 1, threshold: 1008, totalHeight: 766, totalWidth: 1440,
    });

    expect(component).toMatchSnapshot();
  });

  it('should load extra pictures progressively on mount', () => {
    const spy = jest.spyOn(ExtraPictures.prototype, 'progressiveLoading');
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.instance().progressiveLoading();
    expect(spy).toHaveBeenCalled();
  });

  it('should handle hover correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.setState({
      hoverFour: false,
    });

    component.instance().hoverHandler({ target: { name: 'four' } });
    expect(component.state('hoverFour')).toEqual(true);
  });

  it('should handle hovering off correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    component.setState({
      hoverFour: true,
    });

    component.instance().hoverHandler({ target: { name: 'four' } });
    expect(component.state('hoverFour')).toEqual(false);
  });

  it('should handle clicking on the fourth or fifth picture correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} onClickHandler={mockCallBack} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);
    component.setProps({ clickHandler: mockCallBack });

    component.instance().onClickHandler({ target: { name: 'five' } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle window resize', () => {
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} tinyPhotos={['http://lorempixel.com/60/40/city', 'http://lorempixel.com/60/40/city']} />);

    const spy = jest.spyOn(component.instance(), 'updateDimensions');

    global.addEventListener('resize', spy);
    global.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
  });
});
