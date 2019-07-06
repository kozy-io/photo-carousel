/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import ProfilePicture from './ProfilePicture';
import SubPictures from './SubPictures';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };

    this.getListingPhotos = this.getListingPhotos.bind(this);
  }

  componentDidMount() {
    this.getListingPhotos();
  }

  getListingPhotos() {
    axios.get('/api/listings/photos/1')
      .then((response) => {
        this.setState({
          photos: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { photos, windowHeight, windowWidth } = this.state;
    const tmp = [];
    return (
      <div className="photoCarousel">
        <ProfilePicture />
        {photos.length >= 3
          ? <SubPictures photos={[photos[0].photoUrl, photos[1].photoUrl]} />
          : undefined
        }
        {photos.length >= 5
          ? <SubPictures photos={[photos[2].photoUrl, photos[3].photoUrl]} />
          : undefined
        }
        {console.log(tmp)}
      </div>
    );
  }
}

export default App;
