/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import ProfilePicture from './ProfilePicture';
import SubPictures from './SubPictures';
import ExtraPictures from './ExtraPictures';
import Slideshow from './Slideshow';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      currHeight: window.innerHeight,
      currWidth: window.innerWidth,
      threshold: (window.innerWidth * 0.7),
      lastThreshold: (window.innerWidth * 0.5),
      modalView: false,
      modalFocus: '',
      profileOpacity: 1,
      photoTwoOpacity: 1,
      photoThreeOpacity: 1,
      photoFourOpacity: 1,
      photoFiveOpacity: 1,

    };

    this.getListingPhotos = this.getListingPhotos.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  componentDidMount() {
    this.getListingPhotos();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getListingPhotos() {
    const parts = window.location.href.split('/');
    const id = parts[parts.length - 2];

    axios.get(`/api/listings/photos/${id}`)
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

  clickHandler(focus) {
    const { modalView, photos } = this.state;
    let tmp;
    switch (focus) {
      case 'profile':
        tmp = 0;
        break;
      case 'two':
        tmp = 1;
        break;
      case 'three':
        tmp = 2;
        break;
      case 'four':
        tmp = 3;
        break;
      case 'five':
        tmp = 4;
        break;

      default:
        break;
    }

    this.setState({
      modalView: !modalView,
      modalFocus: tmp,
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

  exitModal() {
    this.setState({
      modalView: false,
    });
  }

  render() {
    const {
      photos, windowHeight, windowWidth, profileOpacity, currWidth, currHeight,
      photoTwoOpacity, photoThreeOpacity, photoFourOpacity, photoFiveOpacity,
      threshold, lastThreshold, modalView, modalFocus, exitModal,
    } = this.state;
    return (
      <div className="photoCarousel">
        {photos.length > 0
          ? (
            <ProfilePicture
              photo={photos[0].photoUrl}
              hoverHandler={this.hoverHandler}
              clickHandler={this.clickHandler}
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
              clickHandler={this.clickHandler}
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
              clickHandler={this.clickHandler}
              threshold={threshold}
            />
          )
          : undefined
        }
        {modalView && photos.length > 0
          ? (
            <Slideshow modalFocus={modalFocus} exitModal={this.exitModal} photos={photos} />
          )
          : undefined
        }
      </div>
    );
  }
}

export default App;
