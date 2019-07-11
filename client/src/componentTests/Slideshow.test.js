/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Slideshow from '../components/Slideshow';

describe('Slideshow', () => {
  it('should render correctly', () => {
    const component = shallow(<Slideshow
      modalFocus={1}
      photos={[{
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
      ]}
    />);


    component.setState({ currIndex: 1, translationAmount: 8 });

    expect(component).toMatchSnapshot();
  });

  it('should change the translation amount to 8 if focus is profile picture on mount', () => {
    const component = shallow(<Slideshow
      modalFocus={0}
      photos={[{
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
      ]}
    />);


    expect(component.state().translationAmount).toEqual(8);
  });

  it('should change the translation amount to 8 if focus is pictureTwo on mount', () => {
    const component = shallow(<Slideshow
      modalFocus={1}
      photos={[{
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
      ]}
    />);

    expect(component.state().translationAmount).toEqual(8);
  });

  it('should change the translation amount to 8 if focus is pictureThree on mount', () => {
    const component = shallow(<Slideshow
      modalFocus={2}
      photos={[{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        1,
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
        2,
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
        3,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        2,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ]}
    />);

    expect(component.state().translationAmount).toEqual(-34);
  });

  it('should change the translation amount to 8 if focus is pictureThree on mount', () => {
    const component = shallow(<Slideshow
      modalFocus={3}
      photos={[{
        caption:
        'Et esse laudantium sunt et.',
        createdAt:
        '2019-07-10T01:42:08.000Z',
        id:
        1,
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
        2,
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
        3,
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
        4,
        listing_id:
        1,
        photoUrl:
        'http://lorempixel.com/1440/960/city',
        priority:
        3,
        updatedAt:
        '2019-07-10T01:42:08.000Z',
      },
      ]}
    />);

    expect(component.state().translationAmount).toEqual(-114);
  });

  it('should handle right arrow press', () => {
    const component = shallow(<Slideshow
      modalFocus={1}
      photos={[{
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
      ]}
    />);

    component.instance().nextPictureHandler = jest.fn();
    component.instance().logKey({ code: 'ArrowRight' });

    expect(component.instance().nextPictureHandler).toHaveBeenCalled();
  });

  it('should handle right arrow press', () => {
    const component = shallow(<Slideshow
      modalFocus={1}
      photos={[{
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
      ]}
    />);

    component.instance().prevPictureHandler = jest.fn();
    component.instance().logKey({ code: 'ArrowLeft' });

    expect(component.instance().prevPictureHandler).toHaveBeenCalled();
  });

  it('should change to correct index when moving to next picture', () => {
    const component = shallow(<Slideshow
      modalFocus={0}
      photos={[{
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
      ]}
    />);

    component.instance().nextPictureHandler();

    expect(component.state().currIndex).toEqual(1);
  });

  it('should change to first index when moving to next picture from the last index', () => {
    const component = shallow(<Slideshow
      modalFocus={1}
      photos={[{
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
      ]}
    />);

    component.instance().nextPictureHandler();

    expect(component.state().currIndex).toEqual(0);
  });

  it('should change to correct index when moving to prev picture', () => {
    const component = shallow(<Slideshow
      modalFocus={1}
      photos={[{
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
      ]}
    />);

    component.instance().prevPictureHandler();

    expect(component.state().currIndex).toEqual(0);
  });

  it('should change to last index when moving to prev picture from the first index', () => {
    const component = shallow(<Slideshow
      modalFocus={0}
      photos={[{
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
      ]}
    />);

    component.instance().prevPictureHandler();

    expect(component.state().currIndex).toEqual(1);
  });

  it('should change move to the next picture if you click the main picture', () => {
    const component = shallow(<Slideshow
      modalFocus={0}
      photos={[{
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
      ]}
    />);

    component.find('#mainPicture').simulate('click');

    expect(component.state().currIndex).toEqual(1);
  });
});
