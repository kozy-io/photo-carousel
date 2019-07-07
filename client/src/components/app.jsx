/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import ProfilePicture from './ProfilePicture';
import SubPictures from './SubPictures';
import ExtraPictures from './ExtraPictures';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      profileOpacity: 1,
      photoTwoOpacity: 1,
      photoThreeOpacity: 1,
      photoFourOpacity: 1,
      photoFiveOpacity: 1,

    };

    this.getListingPhotos = this.getListingPhotos.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
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

  hoverHandler(focus) {
    if (focus === 'profile') {
      this.setState({
        photoTwoOpacity: 0.7,
        photoThreeOpacity: 0.7,
        photoFourOpacity: 0.7,
        photoFiveOpacity: 0.7,
      });
    }

    if (focus === 'two') {
      this.setState({
        profileOpacity: 0.7,
        photoThreeOpacity: 0.7,
        photoFourOpacity: 0.7,
        photoFiveOpacity: 0.7,
      });
    }

    if (focus === 'three') {
      this.setState({
        profileOpacity: 0.7,
        photoTwoOpacity: 0.7,
        photoFourOpacity: 0.7,
        photoFiveOpacity: 0.7,
      });
    }

    if (focus === 'four') {
      this.setState({
        profileOpacity: 0.7,
        photoTwoOpacity: 0.7,
        photoThreeOpacity: 0.7,
        photoFiveOpacity: 0.7,
      });
    }

    if (focus === 'five') {
      this.setState({
        profileOpacity: 0.7,
        photoTwoOpacity: 0.7,
        photoThreeOpacity: 0.7,
        photoFourOpacity: 0.7,
      });
    }

    if (focus === 'clear') {
      this.setState({
        profileOpacity: 1,
        photoTwoOpacity: 1,
        photoThreeOpacity: 1,
        photoFourOpacity: 1,
        photoFiveOpacity: 1,
      });
    }
  }

  render() {
    const {
      photos, windowHeight, windowWidth, profileOpacity,
      photoTwoOpacity, photoThreeOpacity, photoFourOpacity, photoFiveOpacity,
    } = this.state;
    return (
      <div className="photoCarousel">
        <ProfilePicture
          hoverHandler={this.hoverHandler}
          totalWidth={windowWidth}
          totalHeight={windowHeight}
          opacity={profileOpacity}
        />
        {photos.length >= 3
          ? (
            <SubPictures
              photos={[photos[0].photoUrl, photos[1].photoUrl]}
              totalWidth={windowWidth}
              totalHeight={windowHeight}
              opacityTwo={photoTwoOpacity}
              opacityThree={photoThreeOpacity}
              hoverHandler={this.hoverHandler}
            />
          )
          : undefined
        }
        {photos.length >= 5
          ? (
            <ExtraPictures
              photos={[photos[2].photoUrl, photos[3].photoUrl]}
              totalWidth={windowWidth}
              totalHeight={windowHeight}
              opacityFour={photoFourOpacity}
              opacityFive={photoFiveOpacity}
              hoverHandler={this.hoverHandler}
            />
          )
          : undefined
        }
      </div>
    );
  }
}

export default App;
