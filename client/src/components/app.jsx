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
      currHeight: window.innerHeight,
      currWidth: window.innerWidth,
      threshold: (window.innerWidth * 0.65),
      lastThreshold: (window.innerWidth * 0.4),
      profileOpacity: 1,
      photoTwoOpacity: 1,
      photoThreeOpacity: 1,
      photoFourOpacity: 1,
      photoFiveOpacity: 1,

    };

    this.getListingPhotos = this.getListingPhotos.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.getListingPhotos();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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

  updateDimensions() {
    this.setState({
      currWidth: window.innerWidth,
      currHeight: window.innerHeight,
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
      photos, windowHeight, windowWidth, profileOpacity, currWidth, currHeight,
      photoTwoOpacity, photoThreeOpacity, photoFourOpacity, photoFiveOpacity,
      threshold, lastThreshold,
    } = this.state;
    return (
      <div className="photoCarousel">
        {photos.length > 0
          ? (
            <ProfilePicture
              photo={photos[0].photoUrl}
              hoverHandler={this.hoverHandler}
              totalWidth={windowWidth}
              totalHeight={windowHeight}
              opacity={profileOpacity}
              currWidth={currWidth}
              threshold={threshold}
              lastThreshold={lastThreshold}
            />
          )
          : undefined
        }
        {photos.length >= 3 && currWidth > lastThreshold
          ? (
            <SubPictures
              photos={[photos[1].photoUrl, photos[2].photoUrl]}
              totalWidth={windowWidth}
              totalHeight={windowHeight}
              opacityTwo={photoTwoOpacity}
              opacityThree={photoThreeOpacity}
              hoverHandler={this.hoverHandler}
              threshold={threshold}
            />
          )
          : undefined
        }
        {photos.length >= 5 && currWidth > threshold
          ? (
            <ExtraPictures
              photos={[photos[3].photoUrl, photos[4].photoUrl]}
              totalWidth={windowWidth}
              totalHeight={windowHeight}
              opacityFour={photoFourOpacity}
              opacityFive={photoFiveOpacity}
              hoverHandler={this.hoverHandler}
              threshold={threshold}
            />
          )
          : undefined
        }
      </div>
    );
  }
}

export default App;
