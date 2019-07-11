import React from 'react';
import { shallow } from 'enzyme';
import SubPictures from '../components/SubPictures';

describe('SubPictures', () => {
  it('should render correctly', () => {
    const component = shallow(<SubPictures photos={ ['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city'] } />);

    component.setState({
      opacityThree: 1, opacityTwo: 1, threshold: 1008, totalHeight: 766, totalWidth: 1440,
    });

    expect(component).toMatchSnapshot();
  });

  it('should handle hover correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} />);

    component.instance().hoverHandler({ target: { name: 'two' } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle click correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} onClickHandler={mockCallBack} />);
    component.setProps({ clickHandler: mockCallBack });

    component.instance().onClickHandler({ target: { name: 'two' } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle window resize', () => {
    const component = shallow(<SubPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} />);

    const spy = jest.spyOn(component.instance(), 'updateDimensions');

    global.addEventListener('resize', spy);
    global.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
  });
});
