import React from 'react';
import { shallow } from 'enzyme';
import ExtraPictures from '../components/ExtraPictures';

describe('ExtraPictures', () => {
  it('should render correctly', () => {
    const component = shallow(<ExtraPictures photos={ ['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city'] }/>);

    component.setState({
      opacityFour: 1, opacityFive: 1, threshold: 1008, totalHeight: 766, totalWidth: 1440,
    });

    expect(component).toMatchSnapshot();
  });

  it('should handle hover correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} hoverHandler={mockCallBack} />);

    component.instance().hoverHandler({ target: { name: 'four' } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle click correctly', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} onClickHandler={mockCallBack} />);
    component.setProps({ clickHandler: mockCallBack });

    component.instance().onClickHandler({ target: { name: 'five' } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should handle window resize', () => {
    const component = shallow(<ExtraPictures photos={['http://lorempixel.com/1440/960/city', 'http://lorempixel.com/1440/960/city']} />);

    const spy = jest.spyOn(component.instance(), 'updateDimensions');

    global.addEventListener('resize', spy);
    global.dispatchEvent(new Event('resize'));

    expect(spy).toHaveBeenCalled();
  });
});
