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
});
