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
});
