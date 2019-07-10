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
});
