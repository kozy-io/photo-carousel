/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

require('babel-core/register');
require('babel-polyfill');

describe('App', () => {
  it('should exist', () => {
    const component = shallow(<App />);

    expect(component.exists()).toBe(true);
  });

  it('should render correctly', async () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });


  it('should update state of everything except profile on hover', () => {
    const component = shallow(<App />);
    component.setState({
      photoFiveOpacity:
      1,
      photoFourOpacity:
      1,
      photoThreeOpacity:
      1,
      photoTwoOpacity:
      1,
      profileOpacity:
      1,
    });
    component.instance().hoverHandler('profile');
    expect(component.state().photoTwoOpacity).toEqual(0.7);
    expect(component.state().photoThreeOpacity).toEqual(0.7);
    expect(component.state().photoFourOpacity).toEqual(0.7);
    expect(component.state().photoFiveOpacity).toEqual(0.7);
  });

  it('should update state of everything except pictureTwo on hover', () => {
    const component = shallow(<App />);
    component.setState({
      photoFiveOpacity:
      1,
      photoFourOpacity:
      1,
      photoThreeOpacity:
      1,
      photoTwoOpacity:
      1,
      profileOpacity:
      1,
    });
    component.instance().hoverHandler('two');
    expect(component.state().profileOpacity).toEqual(0.7);
    expect(component.state().photoThreeOpacity).toEqual(0.7);
    expect(component.state().photoFourOpacity).toEqual(0.7);
    expect(component.state().photoFiveOpacity).toEqual(0.7);
  });

  it('should update state of everything except pictureThree on hover', () => {
    const component = shallow(<App />);
    component.setState({
      photoFiveOpacity:
      1,
      photoFourOpacity:
      1,
      photoThreeOpacity:
      1,
      photoTwoOpacity:
      1,
      profileOpacity:
      1,
    });
    component.instance().hoverHandler('three');
    expect(component.state().profileOpacity).toEqual(0.7);
    expect(component.state().photoTwoOpacity).toEqual(0.7);
    expect(component.state().photoFourOpacity).toEqual(0.7);
    expect(component.state().photoFiveOpacity).toEqual(0.7);
  });

  it('should update state of everything except pictureFour on hover', () => {
    const component = shallow(<App />);
    component.setState({
      photoFiveOpacity:
      1,
      photoFourOpacity:
      1,
      photoThreeOpacity:
      1,
      photoTwoOpacity:
      1,
      profileOpacity:
      1,
    });
    component.instance().hoverHandler('four');
    expect(component.state().profileOpacity).toEqual(0.7);
    expect(component.state().photoTwoOpacity).toEqual(0.7);
    expect(component.state().photoThreeOpacity).toEqual(0.7);
    expect(component.state().photoFiveOpacity).toEqual(0.7);
  });

  it('should update state of everything except pictureFive on hover', () => {
    const component = shallow(<App />);
    component.setState({
      photoFiveOpacity:
      1,
      photoFourOpacity:
      1,
      photoThreeOpacity:
      1,
      photoTwoOpacity:
      1,
      profileOpacity:
      1,
    });
    component.instance().hoverHandler('five');
    expect(component.state().profileOpacity).toEqual(0.7);
    expect(component.state().photoTwoOpacity).toEqual(0.7);
    expect(component.state().photoThreeOpacity).toEqual(0.7);
    expect(component.state().photoFourOpacity).toEqual(0.7);
  });

  it('should update state of everything when mouse is not hovering on any picture', () => {
    const component = shallow(<App />);
    component.setState({
      photoFiveOpacity:
      1,
      photoFourOpacity:
      0.7,
      photoThreeOpacity:
      0.7,
      photoTwoOpacity:
      0.7,
      profileOpacity:
      0.7,
    });

    component.instance().hoverHandler('clear');
    expect(component.state().profileOpacity).toEqual(1);
    expect(component.state().photoTwoOpacity).toEqual(1);
    expect(component.state().photoThreeOpacity).toEqual(1);
    expect(component.state().photoFourOpacity).toEqual(1);
  });

  it('should update state on click', () => {
    const component = shallow(<App />);
    component.setState({
      modalFocus: 3,
      modalView: false,
    });
    component.instance().clickHandler('profile');

    expect(component.state().modalFocus).toEqual(0);
    expect(component.state().modalView).toEqual(true);
  });

  it('renders all children components except modalView when there are atleast than 5 pictures', () => {
    const component = shallow(<App />);
    component.setState({
      photos: [{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        0,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        1,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        2,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        3,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        4,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ],
      currWidth: 10000,
    });
    expect(component.find('ProfilePicture').length).toEqual(1);
    expect(component.find('SubPictures').length).toEqual(1);
    expect(component.find('ExtraPictures').length).toEqual(1);
    expect(component.find('Slideshow').length).toEqual(0);
  });

  it('only render Profile and SubPicture components when there are less than 5 pictures but atleast than 3', () => {
    const component = shallow(<App />);
    component.setState({
      photos: [{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        0,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        1,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        2,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ],
    });

    expect(component.find('ProfilePicture').length).toEqual(1);
    expect(component.find('SubPictures').length).toEqual(1);
    expect(component.find('ExtraPictures').length).toEqual(0);
    expect(component.find('Slideshow').length).toEqual(0);
  });

  it('only render ProfilePicture when there is atleast only 1 picture', () => {
    const component = shallow(<App />);
    component.setState({
      photos: [{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        0,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ],
    });

    expect(component.find('ProfilePicture').length).toEqual(1);
    expect(component.find('SubPictures').length).toEqual(0);
    expect(component.find('ExtraPictures').length).toEqual(0);
    expect(component.find('Slideshow').length).toEqual(0);
  });

  it('Should not render ExtraPictures when window is below first threshold', () => {
    const component = shallow(<App />);
    component.setState({
      photos: [{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        0,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        1,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        2,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        3,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        4,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ],
      currWidth: component.state().threshold - 1,
    });

    expect(component.find('ProfilePicture').length).toEqual(1);
    expect(component.find('SubPictures').length).toEqual(1);
    expect(component.find('ExtraPictures').length).toEqual(0);
    expect(component.find('Slideshow').length).toEqual(0);
  });

  it('Should not render SubPictures when window is below last threshold', () => {
    const component = shallow(<App />);
    component.setState({
      photos: [{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        0,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        1,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        2,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        3,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        4,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ],
      currWidth: component.state().lastThreshold - 1,
    });

    expect(component.find('ProfilePicture').length).toEqual(1);
    expect(component.find('SubPictures').length).toEqual(0);
    expect(component.find('ExtraPictures').length).toEqual(0);
    expect(component.find('Slideshow').length).toEqual(0);
  });

  it('Should render Slideshow component and change focus on component click', () => {
    const component = shallow(<App />);
    component.setState({
      photos: [{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        0,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        1,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        2,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        3,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      {
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        5,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        4,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ],
    });
    component.instance().clickHandler('profile');

    expect(component.find('Slideshow').length).toEqual(1);
    expect(component.state().modalFocus).toEqual(0);
  });

  it('Should exit modalSlideshow when you click the exit button', () => {
    const component = shallow(<App />);
    component.setState({
      modalView: true,
      modalFocus: 0,
    });

    component.instance().exitModal();

    expect(component.find('Slideshow').length).toEqual(0);
  });
});
